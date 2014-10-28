JSBase-class
============

Javascript Base Class

1. Equipment.js
2. Lab.js
3. Lab.util.js
4. Trash.js
5. Bench.js
6. Test.html

Equipment.js is the parent class for all subclass in lab, all equipments in lab are need to inherit from this base class, we can extract all common behaviors and define in this base class.

Lab.js, we define a Lab window object in this js for any global method ,config and variable.

Lab.util.js, we will define all necessary util method here.

Trash.js, just an demo class to demonstrate how to inherit from Equipment class(base class) for a subclass.

Bench.js, just an demo class to demonstrate how to inherit from Equipment class(base class) for a subclass.

Test.html, a test page to demonstrate the console log info after you open this page.
 
