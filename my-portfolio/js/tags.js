/* =====================================================================
   tags.js  -  makes the tag filter on the Tags page work (loaded only on /tags/)

   WHAT IT AFFECTS
   Only the Tags page (tags/index.html). It reads the tag from the end of the
   address (for example /tags/#web) and then:
     - highlights that tag's chip at the top (adds the class "active"),
     - hides every card whose data-tags list does not contain the tag,
     - hides a whole block (Projects / posts) when none of its cards match.
   Each card's data-tags is written by _includes/card.html from the item's "tags:".
   Every tag on a card links to /tags/#tagname, which is how clicking a tag lands here.
   Without JavaScript nothing breaks: the page simply shows all cards.
   ===================================================================== */
(function () {
  var chips = document.querySelectorAll('#tag-filter [data-tag]');   // the row of tag chips
  var cards = document.querySelectorAll('.tag-block .card');
  var blocks = document.querySelectorAll('.tag-block');
  var empty = document.getElementById('tag-empty');                  // "Nothing has this tag yet."

  function apply() {
    var tag = decodeURIComponent(location.hash.replace(/^#/, ''));   // "" means show everything

    for (var i = 0; i < chips.length; i++) {
      chips[i].classList.toggle('active', chips[i].getAttribute('data-tag') === tag);
    }
    for (var j = 0; j < cards.length; j++) {
      var list = (cards[j].getAttribute('data-tags') || '').split(' ');
      cards[j].hidden = !!tag && list.indexOf(tag) === -1;
    }
    var any = false;
    for (var k = 0; k < blocks.length; k++) {
      var visible = blocks[k].querySelectorAll('.card:not([hidden])').length;
      blocks[k].hidden = visible === 0;
      if (visible) any = true;
    }
    if (empty) empty.hidden = any;
  }

  window.addEventListener('hashchange', apply);   // clicking another chip changes the address
  apply();                                         // and once when the page opens
})();
