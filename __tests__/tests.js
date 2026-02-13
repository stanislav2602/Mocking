import { getLevel } from "../src/index";
import fetchData from "../src/http";

jest.mock('../src/http');

describe('getLevel', () => {
    test('return status ok', () => {
        fetchData.mockReturnValue({status: 'ok', level: 10});
        expect(getLevel(1)).toBe('Ваш текущий уровень: 10');
    });

    test('return error status not ok', () => {
        fetchData.mockReturnValue({status: 'error'});
        expect(getLevel(2)).toBe('Информация об уровне временно недоступна');
    });
});