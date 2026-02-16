import { describe, expect, it } from 'vitest';
import request from 'supertest';
import app from '../app.js';

describe('Health check API', () => {
  it('must return 200 status', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});
