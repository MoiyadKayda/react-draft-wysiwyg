/* @flow */

import React from 'react';
import { expect, assert } from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
import { mount } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import {
  EditorState,
  convertFromHTML,
  ContentState,
} from 'draft-js';

import FontFamilyControl from '..';
import { Dropdown } from '../../../Dropdown';
import defaultToolbar from '../../../../config/defaultToolbar';
import ModalHandler from '../../../../event-handler/modals';
import localeTranslations from '../../../../i18n';

describe('FontFamilyControl test suite', () => {
  const contentBlocks = convertFromHTML('<div>test</div>');
  const contentState = ContentState.createFromBlockArray(contentBlocks);
  const editorState = EditorState.createWithContent(contentState);

  it('should have a div when rendered', () => {
    expect(mount(
      <FontFamilyControl
        onChange={() => {}}
        editorState={editorState}
        config={defaultToolbar.fontFamily}
        modalHandler={new ModalHandler()}
        translations={localeTranslations.en}
      />,
    ).html().startsWith('<div')).to.equal(true);
  });

  it('should have a dropdown child component well defined', () => {
    const control = mount(
      <FontFamilyControl
        onChange={() => {}}
        editorState={editorState}
        config={defaultToolbar.fontFamily}
        modalHandler={new ModalHandler()}
        translations={localeTranslations.en}
      />,
    );
    assert.equal(control.childAt(0).props().children.length, 2);
    assert.isDefined(control.childAt(0).props().onChange);
    assert.equal(control.childAt(0).type(), Dropdown);
  });
});
