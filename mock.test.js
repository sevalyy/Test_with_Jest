const { makeSomeAPICall, getArticleTitles, getOneArticle } = require("./mock");

const axios = require("axios");
jest.mock("axios");

const fakeArticleResponse = {
  data: {
    rows: [
      { id: 1, title: "Clean up your GitHub profile!" },
      { id: 3, title: "A helper hook to remember values by deep equality" },
      { id: 3, title: "Sequelize One-To-One relationships" },
      { id: 4, title: "Do components rerender if nested in a useMemo render?" },
    ],
  },
};

describe("#makeAnAPICall", () => {
  test("When called should make an API call and return an array of objects", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve(fakeArticleResponse)
    );
    const rows = await makeSomeAPICall();
    expect(rows).toHaveLength(4);
    expect(rows[0].id).toBe(1);
  });

  test("Axios failed", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject("400 bad request"));
    await expect(makeSomeAPICall()).rejects.toThrow(
      Error("This api call broke")
    );
  });
});

describe("#getArticleTitles", () => {
  describe("when API is working correctly", () => {
    test("it should return an array", async () => {
      axios.get.mockImplementationOnce(() =>
        Promise.resolve(fakeArticleResponse)
      );
      const rows = await getArticleTitles();
      expect(rows).toHaveLength(4);
    });

    test("the contents of the array should be strings", async () => {
      axios.get.mockImplementationOnce(() =>
        Promise.resolve(fakeArticleResponse)
      );
      const rows = await getArticleTitles();
      const actualValue = rows[0];
      const expectedValue = fakeArticleResponse.data.rows[0].title;
      expect(actualValue).toEqual(expectedValue);
    });
  });
  describe("when API is NOT working correctly", () => {
    //define here if it returns an error case!
    test("Axios failed", async () => {
      axios.get.mockImplementationOnce(() => Promise.reject("400 bad request"));
      await expect(getArticleTitles()).rejects.toThrow(
        Error("Something went wrong")
      );
    });
  });
});

//
//
const oneArticleWithId = {
  data: {
    id: 3,
    title: "A helper hook to remember values by deep equality",
  },
};
describe("#getOneArticle", () => {
  describe("when API is working correctly", () => {
    test("", async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve(oneArticleWithId));
      const article = await getOneArticle(3);
      expect(article.id).toEqual(3);
    });
  });
  describe("when API is NOT working correctly", () => {
    test("Axios failed", async () => {
      axios.get.mockImplementationOnce(() =>
        Promise.reject("404 article not found")
      );
      await expect(getOneArticle(1)).rejects.toThrow(
        Error("Something went wrong")
      );
    });
  });
});
