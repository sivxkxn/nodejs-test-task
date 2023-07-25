import { Request, Response } from 'express';
import { TicketService } from '../domain/ticket';

export class TicketController {
  private ticketService: TicketService;

  constructor() {
    this.ticketService = new TicketService();
  }

  async getConcertTickets(req: Request, res: Response) {
    const eventId = req.params.eventId;
    try {
      const tickets = await this.ticketService.getConcertTickets(eventId);
      res.json(tickets);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch concert tickets' });
    }
  }
}
