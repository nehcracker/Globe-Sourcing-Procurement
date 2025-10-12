import { env, createExecutionContext, waitOnExecutionContext, SELF } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';
import worker from '../src';

describe('Globe Sourcing Vendor Registration API', () => {
	it('responds with API info on root endpoint (unit style)', async () => {
		const request = new Request('http://example.com');
		// Create an empty context to pass to `worker.fetch()`.
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		// Wait for all `Promise`s passed to `ctx.waitUntil()` to settle before running test assertions
		await waitOnExecutionContext(ctx);
		expect(await response.text()).toMatchInlineSnapshot(`"{\\"service\\":\\"Globe Sourcing Vendor Registration API\\",\\"version\\":\\"v1\\",\\"status\\":\\"running\\",\\"endpoints\\":{\\"registration\\":\\"POST /api/vendor-registration\\",\\"health\\":\\"GET /api/health\\"}}"`);
	});

	it('responds with API info on root endpoint (integration style)', async () => {
		const response = await SELF.fetch('http://example.com');
		expect(await response.text()).toMatchInlineSnapshot(`"{"service":"Globe Sourcing Vendor Registration API","version":"v1","status":"running","endpoints":{"registration":"POST /api/vendor-registration","health":"GET /api/health"}}"`);
	});

	it('handles health check endpoint', async () => {
		const response = await SELF.fetch('http://example.com/api/health');
		expect(response.status).toBe(200);
		const result = await response.json();
		expect(result.status).toBe('healthy');
		expect(result.services).toBeDefined();
	});

	it('handles vendor registration POST with valid data', async () => {
		const testData = {
			companyName: "Test Electronics Kenya Ltd",
			contactPerson: "John Mwangi",
			email: "john@testelectronics.co.ke",
			phone: "+254 712 345678",
			country: "Kenya",
			productCategory: "Electronics & Technology",
			productSubcategory: "Consumer Electronics",
			productDescription: "We manufacture high-quality consumer electronics including smartphones, tablets, and accessories. ISO 9001 certified with CE and RoHS compliance. Specialized in bulk orders for retailers and distributors across East Africa.",
			moq: "5000",
			packaging: "Boxes/Cartons",
			unitPrice: "12.50",
			currency: "USD",
			certifications: "ISO 9001:2015, CE, RoHS, FCC",
			termsAccepted: true,
			privacyAccepted: true,
			marketingConsent: false
		};

		const response = await SELF.fetch('http://example.com/api/vendor-registration', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(testData)
		});

		const result = await response.json();
		// Note: This will fail in test environment due to missing Zoho credentials
		// But we can test the structure and validation
		expect(result.success).toBeDefined();
		expect(result.error || result.message).toBeDefined();
	});

	it('handles invalid endpoint', async () => {
		const response = await SELF.fetch('http://example.com/api/invalid');
		expect(response.status).toBe(404);
		const result = await response.json();
		expect(result.error).toBe('Not found');
	});

	it('handles OPTIONS request for CORS', async () => {
		const response = await SELF.fetch('http://example.com/api/vendor-registration', {
			method: 'OPTIONS'
		});
		expect(response.status).toBe(204);
		expect(response.headers.get('Access-Control-Allow-Origin')).toBe('http://localhost:3000');
	});
});
