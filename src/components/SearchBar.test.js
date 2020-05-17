import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Search from "./";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Search Bar component", () => {
  test("renders the searchbar", () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.exists()).toBe(true);
  });
});
