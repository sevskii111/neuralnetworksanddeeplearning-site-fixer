// ==UserScript==
// @name neuralnetworksanddeeplearning site fixer
// @namespace MeddleMonkey Scripts
// @grant none
// @match       *://neuralnetworksanddeeplearning.com/*
// ==/UserScript==
document.querySelector('.section').style.margin = 'auto';
document.getElementById('toc').style.right = '10px';
document.getElementById('toc').style.left = 'auto';
