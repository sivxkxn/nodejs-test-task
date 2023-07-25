import { ConcertTicket, TicketFetcherService } from '../services/ticket-fetcher';

export class TicketService {
  private tickets: ConcertTicket[] = [];

  async getConcertTickets(eventId: string): Promise<ConcertTicket[]> {
    if (this.tickets.length === 0) {
      const ticketFetcher = new TicketFetcherService();
      this.tickets = await ticketFetcher.fetchConcertTickets(eventId);
    }
    return this.tickets;
  }
}