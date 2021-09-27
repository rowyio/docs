The `SideDrawer` component is an alternative way for the user to update
documents/rows.

**Source Code:**
[`src/components/SideDrawer`](https://github.com/rowyio/rowy/tree/rc/src/components/SideDrawer)

## 3rd-party dependency: React Hook Form

Inside `SideDrawer`, we have the
[`Form`](https://github.com/rowyio/rowy/blob/rc/src/components/SideDrawer/Form/index.tsx)
component, which uses [React Hook Form](https://react-hook-form.com/) to provide
the hooks required to track the current row’s values, the user’s inputted
values, and which fields the user has “dirtied” (interacted with and edited).
React Hook Form allows us to build a form-like UI _without_ relying on
controlled components, so whenever a user types in a textbox, the entire form
does not re-render.

## How it works

For each field type, we provide a `SideDrawerField` component alongside the
`TableCell` component. They use React Hook Form’s
[Controller](https://react-hook-form.com/api/#Controller) to access the current
row values and let the form component know when the user has input a value.

### `Form` component

The `Form` component is rendered with a key, which is set to the currently
selected row’s document path. Alongside `Reset`, this ensures the form always
has the correct data for the currently selected row, and does not accidentally
overwrite the newly-selected row with the previously-selected row’s data.

### `Autosave` component

The
[`Autosave`](https://github.com/rowyio/rowy/blob/rc/src/components/SideDrawer/Form/Autosave.tsx)
component inside `Form` gets the latest value using
[`useWatch`](https://react-hook-form.com/api/#useWatch) and stores the fields
(and values) that can be edited by the user in a state that’s debounced for 1
second.

A `useEffect` dependent on that debounced state then updates the values of cells
that match the following criteria:

1. The field must be dirty
2. The user’s input value must be different from the current row value for that
   field

The effect then calls
[`updateCell`](https://github.com/rowyio/rowy/blob/rc/src/contexts/ProjectContext.tsx),
which is the same function used by the `Table` component, on each field that
needs to be updated. Usually, the effect only calls it once for one field at a
time since the user does not update multiple fields fast enough.

Once the update is successful, the effect resets all dirty fields to prevent
them being updated again in the future, in case the user updates a different
field in the same row.

### `Reset` component

The
[`Reset`](https://github.com/rowyio/rowy/blob/rc/src/components/SideDrawer/Form/Reset.tsx)
component will resets the form’s values and errors whenever the row’s Firestore
document’s data updates. For example, when another user updates the same row,
this component will ensure the latest data is displayed in the SideDrawer.

This component does NOT reset any dirty fields, so a user will not lose any data
they’ve input that has not been written to the database.

This component also does not reset if the current form’s values match the
calculated new values, preventing any unnecessary resets in the case that the
user has input data into a form field that has not been written to the database
by `Autosave`.
