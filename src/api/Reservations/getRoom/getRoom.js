import { roomData } from "../../../db"

export default {
    Query: {
        rooms: () => roomData,
        room: (_, { id }) => {
            const filteredRoom = roomData.filter(room => room.id === id);
            return filteredRoom[0];
        }
    }
}