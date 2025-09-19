export async function formSubmit({ request }) {
  try {
    const req = await request.formData();
    const data = Object.fromEntries(req);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error);
  }
}
