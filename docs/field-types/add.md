---
id: add
title: Add your own field type
slug: /field-types/add
---

You can add your own field type to Rowy by forking the Rowy repo and writing the
field code yourself. Rowy is written in [React](https://reactjs.org/),
[Typescript](https://www.typescriptlang.org/), and [MUI](https://mui.com/). You
should be comfortable with all three before writing any code.

### 1. Declare a new field type and set up config

1. Add a new entry to the `FieldType` enum in
   [`src/constants/fields.ts`](https://github.com/rowyio/rowy/blob/rc/src/constants/fields.ts).
   The all-caps SNAKE_CASE name will be the internal name used to identify this
   field type.

2. Clone one of the existing field directories in
   [`src/components/fields`](https://github.com/rowyio/rowy/tree/rc/src/components/fields)
   to get started. Make sure to update `config.type` and `config.name`.
   Otherwise, continue with steps 3 and 4.

3. Create a new directory in
   [`src/components/fields`](https://github.com/rowyio/rowy/tree/rc/src/components/fields).
   In that directory, create an `index.ts` file that default exports the
   constant `config`, which implements the interface
   [`IFieldConfig`](https://github.com/rowyio/rowy/blob/rc/src/components/fields/types.ts#L9).

4. Populate the `config` object with the required properties.

### 2. Add `TableCell`

This component is displayed in each cell for this field type.

1. Choose which kind of `TableCell` is best suited for your field type.

   - **Basic Cell:** You only need the cell’s value, field type, or column name
     to render the cell and require few dependencies. The component is light
     enough that it does not affect scroll performance.
   - **Heavy Cell:** You need to access more props (such as the column’s
     configuration or the entire row’s data) or your component is “heavy” to
     render or has lots of dependencies (such as a color picker).
   - **Popover Cell:** You display an inline editor that is a popup (like the
     Single Select or Color field types) or your editor component is very heavy
     that it should only be rendered once, when the user clicks the cell.

2. Use the corresponding higher-order component to implement your cell. See
   [`src/components/fields/_withTableCell`](https://github.com/rowyio/rowy/tree/rc/src/components/fields/_withTableCell).

3. Optionally, use one of the common `BasicCell` components in
   [`src/components/fields/_BasicCell`](https://github.com/rowyio/rowy/tree/rc/src/components/fields/_BasicCell).

   - `BasicCellName` displays the column name.
   - `BasicCellNull` displays nothing.
   - `BasicCellValue` displays the cell’s raw value.

4. When writing components to pass to one of the higher-order components, make
   sure they implement the correct interfaces.

   - **Basic Cell:**
     [`IBasicCellProps`](https://github.com/rowyio/rowy/blob/rc/src/components/fields/types.ts#L26)
   - **Heavy Cell:**
     [`IBasicCellProps`](https://github.com/rowyio/rowy/blob/rc/src/components/fields/types.ts#L26),
     [`IHeavyCellProps`](https://github.com/rowyio/rowy/blob/rc/src/components/fields/types.ts#L31)
   - **Popover Cell:**
     [`IBasicCellProps`](https://github.com/rowyio/rowy/blob/rc/src/components/fields/types.ts#L26),
     [`IPopoverInlineCellProps`](https://github.com/rowyio/rowy/blob/rc/src/components/fields/types.ts#L38),
     [`IPopoverCellProps`](https://github.com/rowyio/rowy/blob/rc/src/components/fields/types.ts#L41)

### 3. Add `TableEditor`

This component is displayed when the user double-clicks the table cell for this
field type.

Choose which kind of `TableEditor` is best suited for your field type. Import
them from
[`src/components/Table/editors`](https://github.com/rowyio/rowy/tree/rc/src/components/Table/editors)

- `TextEditor`: Inline text editor.
- `withSideDrawerEditor`: Opens the `SideDrawer`, keeping the inline table cell
  read-only.
- `NullEditor`: No editor. Best for cells that can be edited inline with a
  click, such as Popover cells.

### 4. Add `SideDrawerField`

This component is displayed in the `SideDrawer` for this field type. Visually,
it is a form field.

It must implement
[`ISideDrawerFieldProps`](https://github.com/rowyio/rowy/blob/rc/src/components/fields/types.ts#L45).

### 5. Export the field config

When you’re ready to test your new field type, export the code and field config.

1. Import the field code directory in
   [`src/components/fields/index.tsx`](https://github.com/rowyio/rowy/blob/rc/src/components/fields/index.tsx).

2. Export the config as part of the `FIELDS` constant.

3. Create a new column in a table with your new field type.
