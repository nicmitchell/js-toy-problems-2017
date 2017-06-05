/*
String indexing: Keep track of which web URLs have been visited.

Use the following methods:
insert: Inserts a word into the trie.
search: Returns if the word is in the trie and is a complete word. 
startsWith: Returns if there is any word in the trie that starts with the given prefix. 
 */

var Trie = function(char) {
    this.root = {};
};

Trie.prototype.insert = function(word) {
    let current = this.root;
    for (let char of word) {
        if (!current[char]) {
            current[char] = {};
        }
        current = current[char];
    }
    current.isWord = true;
};

Trie.prototype.search = function(word) {
    let current = this.root;
    for (let char of word) { 
        if (!current.hasOwnProperty(char)) {
            return false;
        }
        current = current[char];
    }
    return current.isWord === true;
};

Trie.prototype.startsWith = function(prefix) {
    let current = this.root;
    for (let char of prefix) {
        if (!current.hasOwnProperty(char)) {
            return false;
        }
        current = current[char];
    }
    return true;
};
