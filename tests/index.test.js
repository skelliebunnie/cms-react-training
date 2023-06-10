import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";
import Comic from "../components/Comic";

const comicData = {
	image: "https://picsum.photos/id/23/250/350",
	comic: {
		id: 789,
		title: "Tank & Stella",
		issueNumber: 0,
		publishDate: "2024-10-31T00:00:00-0800",
		creators: {
			resourceURI: "https://skelliebunnie.com/",
			name: "SkellieBunnie",
			role: "Creator"
		}
	}
}

afterEach(cleanup);

describe("Comic", () => {
	it("should render details about a comic given data passed via props", () => {
		const { queryByTestId } = render(<Comic comic={comicData} />)
		
		
	});
	
	it("should NOT render the comic component if no data is passed", () => {
		const {debug, queryByTestId} = render(<Comic />);
		const result = queryByTestId("comic");
		expect(result).not.toBeInTheDocument();
	})
  });