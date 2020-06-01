import React, { Component } from "react";
import Searchbox from "./Searchbox";
import Card from "./Card";
import { connect } from "react-redux";

class Home extends React.Component {
  state = {
    keyword: "",
  };
  handleChange = (e) => {
    this.setState({ keyword: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.history.push("/search?keyword=" + this.state.keyword);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <section className="text-gray-700 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Welcome to the TV Tracker!
                </h1>
                <p className="mb-8 leading-relaxed">
                  Search your favourite TV Show now and add it to your
                  watchlist! Keep track of your shows and never worry about what
                  to watch next!
                </p>

                <div className="flex w-full md:justify-start justify-center">
                  <input
                    className="bg-gray-100 rounded mr-4 border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 w-full"
                    placeholder="The next TV show you wanna watch"
                    type="text"
                    onChange={this.handleChange}
                  />
                  <button
                    type="submit"
                    className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Search
                  </button>
                </div>

                <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
                  Try `Big Bang Theory`, it was awesome.
                </p>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
            </div>
          </section>
        </form>

        <footer className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl">tailblocks</span>
              </a>
              <p className="mt-2 text-sm text-gray-500">
                Air plant banjo lyft occupy retro adaptogen indego
              </p>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      First Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Second Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Third Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Fourth Link
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      First Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Second Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Third Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Fourth Link
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      First Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Second Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Third Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Fourth Link
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      First Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Second Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Third Link
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Fourth Link
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-200">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-500 text-sm text-center sm:text-left">
                © 2020 tailblocks —
                <a
                  href="https://twitter.com/knyttneve"
                  rel="noopener noreferrer"
                  className="text-gray-600 ml-1"
                  target="_blank"
                >
                  @knyttneve
                </a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    shows: state.show.shows,
  };
};

export default connect(mapStateToProps)(Home);
