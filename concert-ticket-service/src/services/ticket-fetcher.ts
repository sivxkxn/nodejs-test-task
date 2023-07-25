import axios from 'axios';

export interface ConcertTicket {
  section: string;
  row: string;
  seatNumber: string;
  price: number;
}

export class TicketFetcherService {
    readonly path  = 'https://my.laphil.com/en/syos2/package';
  async fetchConcertTickets(eventId: string): Promise<ConcertTicket[]> {
    try {
      const response = await axios.get(`${this.path}/${eventId}`);
      // const response =  await axios.get('https://my.laphil.com/en/syos2/package/23')
      const ticketData = response.data;
      return ticketData;
    } catch (error) {
      throw new Error('Error fetching concert tickets');
    }
  }
}