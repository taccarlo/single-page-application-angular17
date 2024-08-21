import{Hotel, Room} from './hotel';

export interface CartItem {
    hotel:Hotel;
    room: Room;
    creationDate: number; //id
}