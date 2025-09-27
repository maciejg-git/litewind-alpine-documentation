---
layout: "layouts/container.liquid"
tags: alpineComponent
name: Table
examples: {
    tableSimple: [
        {
            label: "Template",
            file: "examples/table-simple.html",
            language: "html",
            name: "tableSimple",
        },
        {
            label: "Store",
            file: "../examples/table/table-store.js",
            language: "javascript",
            name: "tableSimple",
        },
    ],
    tableDefinition: [
        {
            label: "Template",
            file: "examples/table-definition.html",
            language: "html",
            name: "tableDefinition",
        },
        {
            label: "Store",
            file: "../examples/table/table-definition-store.js",
            language: "javascript",
            name: "tableDefinition",
        },
    ],
    tableFilterPagination: [
        {
            label: "Template",
            file: "examples/table-filter-pagination.html",
            language: "html",
            name: "tableDefinition",
        },
        {
            label: "Store",
            file: "../examples/table/table-filter-pagination-store.js",
            language: "javascript",
            name: "tableDefinition",
        },
    ],
    tableFilterPaginationHighlight: [
        {
            label: "Template",
            file: "examples/table-filter-pagination-highlight.html",
            language: "html",
            name: "tableDefinition",
        },
        {
            label: "Store",
            file: "../examples/table/table-filter-pagination-store.js",
            language: "javascript",
            name: "tableDefinition",
        },
    ],
    tableLoading: [
        {
            label: "Template",
            file: "examples/table-loading.html",
            language: "html",
            name: "tableSimple",
        },
        {
            label: "Store",
            file: "../examples/table/table-store.js",
            language: "javascript",
            name: "tableSimple",
        },
    ],
}
props: [
    {
        name: "data-items",
        type: ["Array"],
        default: "[]",
        description: "Data to display in the table.",
    },
    {
        name: "data-primary-key",
        type: ["String"],
        default: "empty string",
        description: "This prop should be the name of the property that is unique for every record.",
    },
    {
        name: "data-definition",
        type: ["Array"],
        default: "[]",
        description: "Table definition is an optional `array` of `objects` that defines columns of the table. See the detailed explanation below.",
    },
    {
        name: "data-filter",
        type: ["String"],
        default: "empty string",
        description: "String used to filter items.",
    },
    {
        name: "data-page",
        type: ["Number"],
        default: "1",
        description: "Current page number.",
    },
    {
        name: "data-items-per-page",
        type: ["Number"],
        default: "0",
        description: "Number of records (rows) on the single page. Setting it to the `0` disables pagination.",
    },
    {
        name: "data-is-loading",
        type: ["Boolean"],
        default: "false",
        description: "If true, adds classes from the `class-loading` attribute to the table. This can be useful, for example, when loading table data.",
    },
]
definition: [
    {
        name: "key",
        type: ["String"],
        default: "empty string",
        description: "The `key` defines which property of the record object will be rendered in the column.",
    },
    {
        name: "sortable",
        type: ["Boolean"],
        default: "false",
        description: "Enables sorting of the column.",
    },
    {
        name: "filterable",
        type: ["Boolean"],
        default: "true",
        description: "Enables filtering of the column.",
    },
    {
        name: "label",
        type: ["String"],
        default: "undefined",
        description: "Sets header for this column. If not provided header is the same as key converted to Header Case.",
    },
]
events: [
    {
        name: "update:items",
        type: ["Array"],
        description: "Event dispatched after each filtering of the items. This can be useful, for example to update pagination component.",
    },
]
---
## Table

{% render "github-link.liquid" component: "table" %}

The table component is used to generate tables from arrays. Tables can be static or include features like filtering, sorting, pagination, reordering and others.

{% render "example.liquid" example: "examples/table-simple.html", tabs: examples.tableSimple %}

### Usage

```html
<script defer src="https://cdn.jsdelivr.net/npm/litewind-alpine@0.x.x/components/table/dist/cdn.min.js"></script>
```

The data for the component is provided by the `table` function in the `x-data` directive and the props in the `data-*` attributes. Because tables often share state with other components such as pagination or input, it's  recommended to set up the data as a separate store and use the `$store` magic to bind props to the table.

#### Props

{% render "reference.liquid" props: props %}

#### Events

{% render "reference.liquid" props: events %}

### Definition

The table definition is an optional array of objects that defines table's columns. Each object must include a unique `key` property, along with a number of optional properties. The `key` determines which property of the record object is rendered in the column. If key is not found, an empty column is added.

If definition is not provided, the component generates one using the first record in the data array. All additional properties are then set to default values. While this is sufficient for simple tables, using features like sorting or filtering requires providing a custom definition array.

{% render "reference.liquid" props: definition %}

{% render "example.liquid" example: "examples/table-definition.html", tabs: examples.tableDefinition %}

### Pagination and filtering

To enable pagination, set the `data-items-per-page` to any number greater than `0`. The current page can be controlled with the `page` prop. In the example below, the table's current page is managed by the pagination component.

Filtering is enabled by default for all columns. The table data is filtered based on the string provided in the `data-filter` prop. The `update:items-filtered` event is used to update the item count for the pagination component.

{% render "example.liquid" example: "examples/table-filter-pagination.html", tabs: examples.tableFilterPagination %}

### Table loading

The `data-is-loading` prop can be used, for example, when loading table data. Based on its value, the classes from the `class-loading` attribute are added to or removed from the table. By default, the `opacity-50` and `pointer-events-none` classes are applied.

{% render "example.liquid" example: "examples/table-loading.html", tabs: examples.tableLoading %}

### Cell highlight

By default, the filtered portion of the cell content is not highlighted, as this requires the `x-html` directive. You can enable it by simply replacing `x-text` with `x-html` in the `td` element.

```html
<td x-html="getHighlightedCellContent"></td>
```

{% render "example.liquid" example: "examples/table-filter-pagination-highlight.html", tabs: examples.tableFilterPaginationHighlight %}
