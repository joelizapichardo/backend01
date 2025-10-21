
const request = require('supertest');
const express = require('express');

describe('Prueba backend segura (sin tocar nada)', () => {
  it('Simula una solicitud GET segura', async () => {
    const app = express(); 
    app.get('/ping', (req, res) => res.status(200).json({ ok: true }));

    const res = await request(app).get('/ping');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ ok: true });
  });
});
