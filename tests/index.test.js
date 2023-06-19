import Comic from "../components/Comic/Comic";
import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";

const comicData = {
	comic: {
		id: 12345,
		thumbnail: {
			path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
			extension: "jpg"
		},
		title: "Coco & Tank",
		issueNumber: 0,
		dates: [
			{ 
				type: "onsaleDate",
				date: "20240411T00:00:00-0800"
			}
		],
		creators: {
			items: {
				resourceURI: "https://skelliebunnie.com",
				name: "SkellieBunnie",
				role: "Creator"
			}
		}
	}
}

afterEach(cleanup);

describe("<Comic />", () => {
	it("should not render at all if props are missing", () => {
		const { debug, queryByTestId } = render(<Comic />);
		
		const comic = queryByTestId("comic");
		expect(comic).not.toBeInTheDocument();
	})
	
	it("renders info about a comic book", () => {
		// check that all elements are present
		const { queryByTestId } = render(<Comic comic={comicData} />);
		
		const renderedComic = queryByTestId("comic");
		const comicTitle = queryByTestId("title");
		const comicIssueNumber = queryByTestId("issueNumber");
		const comicPublishDate = queryByTestId("publishDate");
		const comicCreators = queryByTestId("creators");
		
		expect(renderedComic).toBeInTheDocument();
		expect(title.textContent).toBe(`${comicTitle}`);
		expect(issueNumber.textContent).toBe(`${comicIssueNumber}`);
		expect(publishDate.textContent).toBe(`${comicPublishDate}`);
		expect(creators.textContent).toBe(`${comicCreators}`);
	});
	
	it("should NOT render the comic component if no data is passed", () => {
		const {debug, queryByTestId} = render(<Comic />);
		const result = queryByTestId("comic");
		expect(result).not.toBeInTheDocument();
	})
  });