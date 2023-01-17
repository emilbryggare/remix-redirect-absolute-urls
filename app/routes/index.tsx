import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";

export const action = async ({ request }: ActionArgs) => {
  let url = new URL(request.url);
  const form = await request.formData();
  const action = form.get("action");
  switch (action) {
    case "relative":
      return redirect("/test");
    case "external":
      return redirect("https://remix.run");
    case "absolute":
      return redirect(url.origin + "/test");
    default:
      throw new Error("Invalid action");
  }
};
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <Link to="/test">Test link</Link>
      <Form method="post">
        <div>
          <button type="submit" name="action" value="relative">
            Redirect action with relative path
          </button>
        </div>
        <div>
          <button type="submit" name="action" value="absolute">
            Redirect action with absolute path
          </button>
        </div>
        <div>
          <button type="submit" name="action" value="external">
            Redirect action with external url
          </button>
        </div>
      </Form>
    </div>
  );
}
