-TO DO-

This is a combination spec and to-do list.

- directive should provide a vertical multi-level expandable and collapsible menu.

- I should be able to click a menu item. if it has children, it should expand.
    If it has no children, the application's route should change.
    If the children of another menu item are visible, they should retract into their parents
    (this option should be binarily configurable).


- directive should optionally accept parameters for closed parent li class,
    open parent li class, closed child ul class, open child ul class, etc.
    Expanding or collapsing a menu item should reflect these specified classes.

- directive should be able to specify which objects in its scope will
    comprise its content OR accept an array directly in an attribute.
    ex: ``<treeview scope-object="indices in Array"></treeview>``.


-Planned Features-

- Farther down the line, should also be able to specify a front-end framework as an attribute. ex:
    ``<treeview framework="bootstrap"></treeview>``.
