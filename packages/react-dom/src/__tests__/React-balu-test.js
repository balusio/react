/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 * 
 * @see https://www.youtube.com/watch?v=aS41Y_eyNrU
 * 
 * this test intend's to understand the fiber based on Dan Abramov talk
 */

 'use strict';



 let React;
 let ReactDOM;
 let ReactDOMServer;

 describe('Balu Checks the fiber', () => {
  beforeEach(() => {
    React = require('react');
    ReactDOM = require('react-dom');
    ReactDOMServer = require('react-dom/server');
  });

  it('works', () => {
    
    const TextDialog = ({children}) => (
      <div>
        {children}
      </div>
    );

    const App = () => {
      return (
        <div>
          <TextDialog>
            <p>there</p>
          </TextDialog>
          <h1>hello</h1>
        </div>
      );
    }
    const container = document.createElement('div');

    ReactDOM.render(<App />, container)
    console.log('welcome everyone')

    expect(container.innerHTML).toBe('<p>there</p><h1>hello</h1>')
  });

 });
