import { cva } from "class-variance-authority";

type Displays =
	| "hidden"
	| "block"
	| "contents"
	| "flex"
	| "flow-root"
	| "grid"
	| "inline"
	| "inline-block"
	| "inline-flex"
	| "inline-grid"
	| "list-item";

type FlexDirection = "column" | "column-reverse" | "row-reverse" | "row";

type AlignContent =
	| "center"
	| "start"
	| "end"
	| "stretch"
	| "space-between"
	| "space-around"
	| "space-evenly";
type AlignItems = "center" | "start" | "end" | "stretch" | "baseline";

type AlignSelf = "auto" | "center" | "start" | "end" | "stretch" | "baseline";

type JustifyContent =
	| "center"
	| "start"
	| "end"
	| "space-between"
	| "space-around"
	| "space-evenly";

type JustifyItems = "center" | "start" | "end" | "stretch";

type JustifySelf = "auto" | "center" | "start" | "end" | "stretch";

type Spaces =
	| 0
	| 0.5
	| 1
	| 1.5
	| 2
	| 2.5
	| 3
	| 4
	| 5
	| 6
	| 8
	| 10
	| 12
	| 14
	| 16
	| 20
	| 24
	| 32
	| 48
	| 64;

export type UtilityProps = Partial<{
	alignContent: AlignContent;
	alignItems: AlignItems;
	alignSelf: AlignSelf;
	display: Displays;
	flexDirection: FlexDirection;
	gap: Spaces;
	justifyContent: JustifyContent;
	justifyItems: JustifyItems;
	justifySelf: JustifySelf;
	m: Spaces;
	mb: Spaces;
	ml: Spaces;
	mr: Spaces;
	mt: Spaces;
	mx: Spaces;
	my: Spaces;
	p: Spaces;
	pb: Spaces;
	pl: Spaces;
	pr: Spaces;
	pt: Spaces;
	px: Spaces;
	py: Spaces;
}>;

export const spacingUtiltiesClasses = cva("", {
	variants: {
		alignContent: {
			center: "content-center",
			start: "content-start",
			end: "content-end",
			stretch: "content-stretch",
			["space-between"]: "content-between",
			["space-around"]: "content-around",
			["space-evenly"]: "content-evenly",
		},
		alignItems: {
			center: "items-center",
			start: "items-start",
			end: "items-end",
			stretch: "items-stretch",
			baseline: "items-baseline",
		},
		alignSelf: {
			auto: "self-auto",
			center: "self-center",
			start: "self-start",
			end: "self-end",
			stretch: "self-stretch",
			baseline: "self-baseline",
		},
		display: {
			hidden: "hidden",
			block: "block",
			contents: "contents",
			flex: "flex",
			["flow-root"]: "flow-root",
			grid: "grid",
			inline: "inline",
			["inline-block"]: "inline-block",
			["inline-flex"]: "inline-flex",
			["inline-grid"]: "inline-grid",
			["list-item"]: "list-item",
		},
		flexDirection: {
			column: "flex-col",
			["column-reverse"]: "flex-col-reverse",
			["row-reverse"]: "flex-row-reverse",
			row: "flex-row",
		},
		gap: {
			0: "gap-0",
			0.5: "gap-0.5",
			1: "gap-1",
			1.5: "gap-1.5",
			2: "gap-2",
			2.5: "gap-2.5",
			3: "gap-3",
			4: "gap-4",
			5: "gap-5",
			6: "gap-6",
			8: "gap-8",
			10: "gap-10",
			12: "gap-12",
			14: "gap-14",
			16: "gap-16",
			20: "gap-20",
			24: "gap-24",
			32: "gap-32",
			48: "gap-48",
			64: "gap-64",
		},
		justifyContent: {
			center: "justify-center",
			start: "justify-start",
			end: "justify-end",
			"space-between": "justify-between",
			"space-around": "justify-around",
			"space-evenly": "justify-evenly",
		},
		justifyItems: {
			center: "justify-items-center",
			start: "justify-items-start",
			end: "justify-items-end",
			stretch: "justify-items-stretch",
		},
		justifySelf: {
			auto: "justify-self-auto",
			center: "justify-self-center",
			start: "start",
			end: "end",
			stretch: "stretch",
		},

		m: {
			0: "m-0",
			0.5: "m-0.5",
			1: "m-1",
			1.5: "m-1.5",
			2: "m-2",
			2.5: "m-2.5",
			3: "m-3",
			4: "m-4",
			5: "m-5",
			6: "m-6",
			8: "m-8",
			10: "m-10",
			12: "m-12",
			14: "m-14",
			16: "m-16",
			20: "m-20",
			24: "m-24",
			32: "m-32",
			48: "m-48",
			64: "m-64",
		},
		mb: {
			0: "mb-0",
			0.5: "mb-0.5",
			1: "mb-1",
			1.5: "mb-1.5",
			2: "mb-2",
			2.5: "mb-2.5",
			3: "mb-3",
			4: "mb-4",
			5: "mb-5",
			6: "mb-6",
			8: "mb-8",
			10: "mb-10",
			12: "mb-12",
			14: "mb-14",
			16: "mb-16",
			20: "mb-20",
			24: "mb-24",
			32: "mb-32",
			48: "mb-48",
			64: "mb-64",
		},
		ml: {
			0: "ml-0",
			0.5: "ml-0.5",
			1: "ml-1",
			1.5: "ml-1.5",
			2: "ml-2",
			2.5: "ml-2.5",
			3: "ml-3",
			4: "ml-4",
			5: "ml-5",
			6: "ml-6",
			8: "ml-8",
			10: "ml-10",
			12: "ml-12",
			14: "ml-14",
			16: "ml-16",
			20: "ml-20",
			24: "ml-24",
			32: "ml-32",
			48: "ml-48",
			64: "ml-64",
		},
		mr: {
			0: "mr-0",
			0.5: "mr-0.5",
			1: "mr-1",
			1.5: "mr-1.5",
			2: "mr-2",
			2.5: "mr-2.5",
			3: "mr-3",
			4: "mr-4",
			5: "mr-5",
			6: "mr-6",
			8: "mr-8",
			10: "mr-10",
			12: "mr-12",
			14: "mr-14",
			16: "mr-16",
			20: "mr-20",
			24: "mr-24",
			32: "mr-32",
			48: "mr-48",
			64: "mr-64",
		},
		mt: {
			0: "mt-0",
			0.5: "mt-0.5",
			1: "mt-1",
			1.5: "mt-1.5",
			2: "mt-2",
			2.5: "mt-2.5",
			3: "mt-3",
			4: "mt-4",
			5: "mt-5",
			6: "mt-6",
			8: "mt-8",
			10: "mt-10",
			12: "mt-12",
			14: "mt-14",
			16: "mt-16",
			20: "mt-20",
			24: "mt-24",
			32: "mt-32",
			48: "mt-48",
			64: "mt-64",
		},
		mx: {
			0: "mx-0",
			0.5: "mx-0.5",
			1: "mx-1",
			1.5: "mx-1.5",
			2: "mx-2",
			2.5: "mx-2.5",
			3: "mx-3",
			4: "mx-4",
			5: "mx-5",
			6: "mx-6",
			8: "mx-8",
			10: "mx-10",
			12: "mx-12",
			14: "mx-14",
			16: "mx-16",
			20: "mx-20",
			24: "mx-24",
			32: "mx-32",
			48: "mx-48",
			64: "mx-64",
		},
		my: {
			0: "my-0",
			0.5: "my-0.5",
			1: "my-1",
			1.5: "my-1.5",
			2: "my-2",
			2.5: "my-2.5",
			3: "my-3",
			4: "my-4",
			5: "my-5",
			6: "my-6",
			8: "my-8",
			10: "my-10",
			12: "my-12",
			14: "my-14",
			16: "my-16",
			20: "my-20",
			24: "my-24",
			32: "my-32",
			48: "my-48",
			64: "my-64",
		},
		p: {
			0: "p-0",
			0.5: "p-0.5",
			1: "p-1",
			1.5: "p-1.5",
			2: "p-2",
			2.5: "p-2.5",
			3: "p-3",
			4: "p-4",
			5: "p-5",
			6: "p-6",
			8: "p-8",
			10: "p-10",
			12: "p-12",
			14: "p-14",
			16: "p-16",
			20: "p-20",
			24: "p-24",
			32: "p-32",
			48: "p-48",
			64: "p-64",
		},
		pb: {
			0: "pb-0",
			0.5: "pb-0.5",
			1: "pb-1",
			1.5: "pb-1.5",
			2: "pb-2",
			2.5: "pb-2.5",
			3: "pb-3",
			4: "pb-4",
			5: "pb-5",
			6: "pb-6",
			8: "pb-8",
			10: "pb-10",
			12: "pb-12",
			14: "pb-14",
			16: "pb-16",
			20: "pb-20",
			24: "pb-24",
			32: "pb-32",
			48: "pb-48",
			64: "pb-64",
		},
		pl: {
			0: "pl-0",
			0.5: "pl-0.5",
			1: "pl-1",
			1.5: "pl-1.5",
			2: "pl-2",
			2.5: "pl-2.5",
			3: "pl-3",
			4: "pl-4",
			5: "pl-5",
			6: "pl-6",
			8: "pl-8",
			10: "pl-10",
			12: "pl-12",
			14: "pl-14",
			16: "pl-16",
			20: "pl-20",
			24: "pl-24",
			32: "pl-32",
			48: "pl-48",
			64: "pl-64",
		},
		pr: {
			0: "pr-0",
			0.5: "pr-0.5",
			1: "pr-1",
			1.5: "pr-1.5",
			2: "pr-2",
			2.5: "pr-2.5",
			3: "pr-3",
			4: "pr-4",
			5: "pr-5",
			6: "pr-6",
			8: "pr-8",
			10: "pr-10",
			12: "pr-12",
			14: "pr-14",
			16: "pr-16",
			20: "pr-20",
			24: "pr-24",
			32: "pr-32",
			48: "pr-48",
			64: "pr-64",
		},
		pt: {
			0: "pt-0",
			0.5: "pt-0.5",
			1: "pt-1",
			1.5: "pt-1.5",
			2: "pt-2",
			2.5: "pt-2.5",
			3: "pt-3",
			4: "pt-4",
			5: "pt-5",
			6: "pt-6",
			8: "pt-8",
			10: "pt-10",
			12: "pt-12",
			14: "pt-14",
			16: "pt-16",
			20: "pt-20",
			24: "pt-24",
			32: "pt-32",
			48: "pt-48",
			64: "pt-64",
		},
		px: {
			0: "px-0",
			0.5: "px-0.5",
			1: "px-1",
			1.5: "px-1.5",
			2: "px-2",
			2.5: "px-2.5",
			3: "px-3",
			4: "px-4",
			5: "px-5",
			6: "px-6",
			8: "px-8",
			10: "px-10",
			12: "px-12",
			14: "px-14",
			16: "px-16",
			20: "px-20",
			24: "px-24",
			32: "px-32",
			48: "px-48",
			64: "px-64",
		},
		py: {
			0: "py-0",
			0.5: "py-0.5",
			1: "py-1",
			1.5: "py-1.5",
			2: "py-2",
			2.5: "py-2.5",
			3: "py-3",
			4: "py-4",
			5: "py-5",
			6: "py-6",
			8: "py-8",
			10: "py-10",
			12: "py-12",
			14: "py-14",
			16: "py-16",
			20: "py-20",
			24: "py-24",
			32: "py-32",
			48: "py-48",
			64: "py-64",
		},
	},
});
