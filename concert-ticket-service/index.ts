import express from 'express';
import { TicketController } from './src/controllers/ticket-controller';

const app = express();
const port = 3000;
const ticketController = new TicketController();

app.get('/concert-tickets/:eventId', ticketController.getConcertTickets.bind(ticketController));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});