import {XmlSerializer} from '@themost/xml/serialization';
describe('XmlSerializer', () => {
    it('should create instance', () => {
        const serializer = new XmlSerializer();
        expect(serializer).toBeTruthy();
    });
});