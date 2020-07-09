import {
  defaults,
  error
} from '@pnotify/core';

defaults.closer = false;
defaults.sticker = false;
defaults.maxTextHeight = null;
defaults.width = '500px';
defaults.minHeight = '50px'
defaults.delay = 500;

export const showTooMany = function() {
  error({text: 'Too many matches found. Please, specify request.'})
};

export const showNoMatches = function() {
  error({text: 'No matches found. Please, specify request.'})
};