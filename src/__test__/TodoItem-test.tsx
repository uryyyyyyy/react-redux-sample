import {assert} from "chai";
import * as React from "react";
import Counter from "../Counter";
import {mount} from "enzyme";
import store from "../Store";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';


describe('Counter test', () => {

    it('render test', () => {
        console.log(store.getState());
        const component = mount(<Counter value={{num: 0}} />);

        assert.deepEqual(component.children().at(0).type(), 'p');
        assert.deepEqual(component.children().at(0).text(), 'Clicked: 0 times');
    });

    it('action test', () => {
        
        const component = mount(<Counter value={{num: 0}} />, {context: {store: store}});

        const actions = store.getActions();

        console.log(actions)
    });
});