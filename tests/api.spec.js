const { test, expect } = require('@playwright/test');

test.only("get users", async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users/2");
    console.log(await response.json());
    expect(response.status()).toBe(200);

})

test("create users", async ({ request }) => {

})

test("update users", async ({ request }) => {

})

test("delete users", async ({ request }) => {

})