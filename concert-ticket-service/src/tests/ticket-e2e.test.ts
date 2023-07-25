// import request from 'supertest';
// import { app } from '../index';

// describe('Ticket API Endpoints', () => {
//   it('should fetch concert tickets via HTTP GET', async () => {
//     const eventId = '1195'; 
//     const res = await request(app).get(`/concert-tickets/${eventId}`);
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toBeDefined();
//     expect(Array.isArray(res.body)).toBeTruthy();
//   });
// });