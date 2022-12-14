import { client } from "../client";

test(`Assert if "min_abstract_length"`, async () => {
  const response = await client().get("").expect(200);

  const minAbstractLength = JSON.parse(response.text).meta.src_options
    .min_abstract_length;

  expect(minAbstractLength).toEqual(expect.anything());

  const intMinAbstractLength = parseInt(minAbstractLength);
  expect(typeof intMinAbstractLength).toBe("number");
});
