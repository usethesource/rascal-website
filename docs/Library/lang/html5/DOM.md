---
title: "module lang::html5::DOM"
---

#### Usage

`import lang::html5::DOM;`

#### Synopsis

DOM-based AST model for HTML5 including pretty printer


## data HTML5Node {#lang-html5-DOM-HTML5Node}

```rascal
data HTML5Node  
     = html5node(str name, list[value] kids)
     ;
```

## data HTML5Attr {#lang-html5-DOM-HTML5Attr}

```rascal
data HTML5Attr  
     = html5attr(str name, value val)
     ;
```

## function a {#lang-html5-DOM-a}

```rascal
HTML5Node a(value kids...)

```

## function abbr {#lang-html5-DOM-abbr}

```rascal
HTML5Node abbr(value kids...)

```

## function address {#lang-html5-DOM-address}

```rascal
HTML5Node address(value kids...)

```

## function area {#lang-html5-DOM-area}

```rascal
HTML5Node area(value kids...)

```

## function article {#lang-html5-DOM-article}

```rascal
HTML5Node article(value kids...)

```

## function aside {#lang-html5-DOM-aside}

```rascal
HTML5Node aside(value kids...)

```

## function audio {#lang-html5-DOM-audio}

```rascal
HTML5Node audio(value kids...)

```

## function b {#lang-html5-DOM-b}

```rascal
HTML5Node b(value kids...)

```

## function base {#lang-html5-DOM-base}

```rascal
HTML5Node base(value kids...)

```

## function bdi {#lang-html5-DOM-bdi}

```rascal
HTML5Node bdi(value kids...)

```

## function bdo {#lang-html5-DOM-bdo}

```rascal
HTML5Node bdo(value kids...)

```

## function blockquote {#lang-html5-DOM-blockquote}

```rascal
HTML5Node blockquote(value kids...)

```

## function body {#lang-html5-DOM-body}

```rascal
HTML5Node body(value kids...)

```

## function br {#lang-html5-DOM-br}

```rascal
HTML5Node br(value kids...)

```

## function button {#lang-html5-DOM-button}

```rascal
HTML5Node button(value kids...)

```

## function canvas {#lang-html5-DOM-canvas}

```rascal
HTML5Node canvas(value kids...)

```

## function caption {#lang-html5-DOM-caption}

```rascal
HTML5Node caption(value kids...)

```

## function cite {#lang-html5-DOM-cite}

```rascal
HTML5Node cite(value kids...)

```

## function code {#lang-html5-DOM-code}

```rascal
HTML5Node code(value kids...)

```

## function col {#lang-html5-DOM-col}

```rascal
HTML5Node col(value kids...)

```

## function colgroup {#lang-html5-DOM-colgroup}

```rascal
HTML5Node colgroup(value kids...)

```

## function \data {#lang-html5-DOM-\data}

```rascal
HTML5Node \data(value kids...)

```

## function datalist {#lang-html5-DOM-datalist}

```rascal
HTML5Node datalist(value kids...)

```

## function dd {#lang-html5-DOM-dd}

```rascal
HTML5Node dd(value kids...)

```

## function del {#lang-html5-DOM-del}

```rascal
HTML5Node del(value kids...)

```

## function details {#lang-html5-DOM-details}

```rascal
HTML5Node details(value kids...)

```

## function dfn {#lang-html5-DOM-dfn}

```rascal
HTML5Node dfn(value kids...)

```

## function dialog {#lang-html5-DOM-dialog}

```rascal
HTML5Node dialog(value kids...)

```

## function div {#lang-html5-DOM-div}

```rascal
HTML5Node div(value kids...)

```

## function dl {#lang-html5-DOM-dl}

```rascal
HTML5Node dl(value kids...)

```

## function dt {#lang-html5-DOM-dt}

```rascal
HTML5Node dt(value kids...)

```

## function em {#lang-html5-DOM-em}

```rascal
HTML5Node em(value kids...)

```

## function embed {#lang-html5-DOM-embed}

```rascal
HTML5Node embed(value kids...)

```

## function fieldset {#lang-html5-DOM-fieldset}

```rascal
HTML5Node fieldset(value kids...)

```

## function figcaption {#lang-html5-DOM-figcaption}

```rascal
HTML5Node figcaption(value kids...)

```

## function figure {#lang-html5-DOM-figure}

```rascal
HTML5Node figure(value kids...)

```

## function footer {#lang-html5-DOM-footer}

```rascal
HTML5Node footer(value kids...)

```

## function form {#lang-html5-DOM-form}

```rascal
HTML5Node form(value kids...)

```

## function h1 {#lang-html5-DOM-h1}

```rascal
HTML5Node h1(value kids...)

```

## function h2 {#lang-html5-DOM-h2}

```rascal
HTML5Node h2(value kids...)

```

## function h3 {#lang-html5-DOM-h3}

```rascal
HTML5Node h3(value kids...)

```

## function h4 {#lang-html5-DOM-h4}

```rascal
HTML5Node h4(value kids...)

```

## function h5 {#lang-html5-DOM-h5}

```rascal
HTML5Node h5(value kids...)

```

## function h6 {#lang-html5-DOM-h6}

```rascal
HTML5Node h6(value kids...)

```

## function head {#lang-html5-DOM-head}

```rascal
HTML5Node head(value kids...)

```

## function header {#lang-html5-DOM-header}

```rascal
HTML5Node header(value kids...)

```

## function hgroup {#lang-html5-DOM-hgroup}

```rascal
HTML5Node hgroup(value kids...)

```

## function hr {#lang-html5-DOM-hr}

```rascal
HTML5Node hr(value kids...)

```

## function html {#lang-html5-DOM-html}

```rascal
HTML5Node html(value kids...)

```

## function i {#lang-html5-DOM-i}

```rascal
HTML5Node i(value kids...)

```

## function iframe {#lang-html5-DOM-iframe}

```rascal
HTML5Node iframe(value kids...)

```

## function img {#lang-html5-DOM-img}

```rascal
HTML5Node img(value kids...)

```

## function input {#lang-html5-DOM-input}

```rascal
HTML5Node input(value kids...)

```

## function ins {#lang-html5-DOM-ins}

```rascal
HTML5Node ins(value kids...)

```

## function kbd {#lang-html5-DOM-kbd}

```rascal
HTML5Node kbd(value kids...)

```

## function keygen {#lang-html5-DOM-keygen}

```rascal
HTML5Node keygen(value kids...)

```

## function label {#lang-html5-DOM-label}

```rascal
HTML5Node label(value kids...)

```

## function legend {#lang-html5-DOM-legend}

```rascal
HTML5Node legend(value kids...)

```

## function li {#lang-html5-DOM-li}

```rascal
HTML5Node li(value kids...)

```

## function link {#lang-html5-DOM-link}

```rascal
HTML5Node link(value kids...)

```

## function main {#lang-html5-DOM-main}

```rascal
HTML5Node main(value kids...)

```

## function \map {#lang-html5-DOM-\map}

```rascal
HTML5Node \map(value kids...)

```

## function mark {#lang-html5-DOM-mark}

```rascal
HTML5Node mark(value kids...)

```

## function menu {#lang-html5-DOM-menu}

```rascal
HTML5Node menu(value kids...)

```

## function menuitem {#lang-html5-DOM-menuitem}

```rascal
HTML5Node menuitem(value kids...)

```

## function meta {#lang-html5-DOM-meta}

```rascal
HTML5Node meta(value kids...)

```

## function meter {#lang-html5-DOM-meter}

```rascal
HTML5Node meter(value kids...)

```

## function nav {#lang-html5-DOM-nav}

```rascal
HTML5Node nav(value kids...)

```

## function noscript {#lang-html5-DOM-noscript}

```rascal
HTML5Node noscript(value kids...)

```

## function object {#lang-html5-DOM-object}

```rascal
HTML5Node object(value kids...)

```

## function ol {#lang-html5-DOM-ol}

```rascal
HTML5Node ol(value kids...)

```

## function optgroup {#lang-html5-DOM-optgroup}

```rascal
HTML5Node optgroup(value kids...)

```

## function option {#lang-html5-DOM-option}

```rascal
HTML5Node option(value kids...)

```

## function output {#lang-html5-DOM-output}

```rascal
HTML5Node output(value kids...)

```

## function p {#lang-html5-DOM-p}

```rascal
HTML5Node p(value kids...)

```

## function param {#lang-html5-DOM-param}

```rascal
HTML5Node param(value kids...)

```

## function pre {#lang-html5-DOM-pre}

```rascal
HTML5Node pre(value kids...)

```

## function progress {#lang-html5-DOM-progress}

```rascal
HTML5Node progress(value kids...)

```

## function q {#lang-html5-DOM-q}

```rascal
HTML5Node q(value kids...)

```

## function rp {#lang-html5-DOM-rp}

```rascal
HTML5Node rp(value kids...)

```

## function rt {#lang-html5-DOM-rt}

```rascal
HTML5Node rt(value kids...)

```

## function ruby {#lang-html5-DOM-ruby}

```rascal
HTML5Node ruby(value kids...)

```

## function s {#lang-html5-DOM-s}

```rascal
HTML5Node s(value kids...)

```

## function samp {#lang-html5-DOM-samp}

```rascal
HTML5Node samp(value kids...)

```

## function script {#lang-html5-DOM-script}

```rascal
HTML5Node script(value kids...)

```

## function section {#lang-html5-DOM-section}

```rascal
HTML5Node section(value kids...)

```

## function select {#lang-html5-DOM-select}

```rascal
HTML5Node select(value kids...)

```

## function small {#lang-html5-DOM-small}

```rascal
HTML5Node small(value kids...)

```

## function source {#lang-html5-DOM-source}

```rascal
HTML5Node source(value kids...)

```

## function span {#lang-html5-DOM-span}

```rascal
HTML5Node span(value kids...)

```

## function strong {#lang-html5-DOM-strong}

```rascal
HTML5Node strong(value kids...)

```

## function style {#lang-html5-DOM-style}

```rascal
HTML5Node style(value kids...)

```

## function sub {#lang-html5-DOM-sub}

```rascal
HTML5Node sub(value kids...)

```

## function summary {#lang-html5-DOM-summary}

```rascal
HTML5Node summary(value kids...)

```

## function sup {#lang-html5-DOM-sup}

```rascal
HTML5Node sup(value kids...)

```

## function table {#lang-html5-DOM-table}

```rascal
HTML5Node table(value kids...)

```

## function tbody {#lang-html5-DOM-tbody}

```rascal
HTML5Node tbody(value kids...)

```

## function td {#lang-html5-DOM-td}

```rascal
HTML5Node td(value kids...)

```

## function template {#lang-html5-DOM-template}

```rascal
HTML5Node template(value kids...)

```

## function textarea {#lang-html5-DOM-textarea}

```rascal
HTML5Node textarea(value kids...)

```

## function tfoot {#lang-html5-DOM-tfoot}

```rascal
HTML5Node tfoot(value kids...)

```

## function th {#lang-html5-DOM-th}

```rascal
HTML5Node th(value kids...)

```

## function thead {#lang-html5-DOM-thead}

```rascal
HTML5Node thead(value kids...)

```

## function time {#lang-html5-DOM-time}

```rascal
HTML5Node time(value kids...)

```

## function title {#lang-html5-DOM-title}

```rascal
HTML5Node title(value kids...)

```

## function tr {#lang-html5-DOM-tr}

```rascal
HTML5Node tr(value kids...)

```

## function track {#lang-html5-DOM-track}

```rascal
HTML5Node track(value kids...)

```

## function u {#lang-html5-DOM-u}

```rascal
HTML5Node u(value kids...)

```

## function ul {#lang-html5-DOM-ul}

```rascal
HTML5Node ul(value kids...)

```

## function var {#lang-html5-DOM-var}

```rascal
HTML5Node var(value kids...)

```

## function video {#lang-html5-DOM-video}

```rascal
HTML5Node video(value kids...)

```

## function wbr {#lang-html5-DOM-wbr}

```rascal
HTML5Node wbr(value kids...)

```

## function abbr {#lang-html5-DOM-abbr}

```rascal
HTML5Attr abbr(value val)

```

## function about {#lang-html5-DOM-about}

```rascal
HTML5Attr about(value val)

```

## function accept {#lang-html5-DOM-accept}

```rascal
HTML5Attr accept(value val)

```

## function accesskey {#lang-html5-DOM-accesskey}

```rascal
HTML5Attr accesskey(value val)

```

## function action {#lang-html5-DOM-action}

```rascal
HTML5Attr action(value val)

```

## function align {#lang-html5-DOM-align}

```rascal
HTML5Attr align(value val)

```

## function allowfullscreen {#lang-html5-DOM-allowfullscreen}

```rascal
HTML5Attr allowfullscreen(value val)

```

## function alt {#lang-html5-DOM-alt}

```rascal
HTML5Attr alt(value val)

```

## function aria {#lang-html5-DOM-aria}

```rascal
HTML5Attr aria(value val)

```

## function async {#lang-html5-DOM-async}

```rascal
HTML5Attr async(value val)

```

## function autocomplete {#lang-html5-DOM-autocomplete}

```rascal
HTML5Attr autocomplete(value val)

```

## function autofocus {#lang-html5-DOM-autofocus}

```rascal
HTML5Attr autofocus(value val)

```

## function autoplay {#lang-html5-DOM-autoplay}

```rascal
HTML5Attr autoplay(value val)

```

## function border {#lang-html5-DOM-border}

```rascal
HTML5Attr border(value val)

```

## function challenge {#lang-html5-DOM-challenge}

```rascal
HTML5Attr challenge(value val)

```

## function char {#lang-html5-DOM-char}

```rascal
HTML5Attr char(value val)

```

## function charset {#lang-html5-DOM-charset}

```rascal
HTML5Attr charset(value val)

```

## function checked {#lang-html5-DOM-checked}

```rascal
HTML5Attr checked(value val)

```

## function cite {#lang-html5-DOM-cite}

```rascal
HTML5Attr cite(value val)

```

## function class {#lang-html5-DOM-class}

```rascal
HTML5Attr class(value val)

```

## function cols {#lang-html5-DOM-cols}

```rascal
HTML5Attr cols(value val)

```

## function colspan {#lang-html5-DOM-colspan}

```rascal
HTML5Attr colspan(value val)

```

## function command {#lang-html5-DOM-command}

```rascal
HTML5Attr command(value val)

```

## function content {#lang-html5-DOM-content}

```rascal
HTML5Attr content(value val)

```

## function contenteditable {#lang-html5-DOM-contenteditable}

```rascal
HTML5Attr contenteditable(value val)

```

## function contextmenu {#lang-html5-DOM-contextmenu}

```rascal
HTML5Attr contextmenu(value val)

```

## function controls {#lang-html5-DOM-controls}

```rascal
HTML5Attr controls(value val)

```

## function coords {#lang-html5-DOM-coords}

```rascal
HTML5Attr coords(value val)

```

## function \data {#lang-html5-DOM-\data}

```rascal
HTML5Attr \data(value val)

```

## function datatype {#lang-html5-DOM-datatype}

```rascal
HTML5Attr datatype(value val)

```

## function \datetime {#lang-html5-DOM-\datetime}

```rascal
HTML5Attr \datetime(value val)

```

## function \default {#lang-html5-DOM-\default}

```rascal
HTML5Attr \default(value val)

```

## function defer {#lang-html5-DOM-defer}

```rascal
HTML5Attr defer(value val)

```

## function dir {#lang-html5-DOM-dir}

```rascal
HTML5Attr dir(value val)

```

## function dirname {#lang-html5-DOM-dirname}

```rascal
HTML5Attr dirname(value val)

```

## function disabled {#lang-html5-DOM-disabled}

```rascal
HTML5Attr disabled(value val)

```

## function download {#lang-html5-DOM-download}

```rascal
HTML5Attr download(value val)

```

## function draggable {#lang-html5-DOM-draggable}

```rascal
HTML5Attr draggable(value val)

```

## function dropzone {#lang-html5-DOM-dropzone}

```rascal
HTML5Attr dropzone(value val)

```

## function enctype {#lang-html5-DOM-enctype}

```rascal
HTML5Attr enctype(value val)

```

## function \for {#lang-html5-DOM-\for}

```rascal
HTML5Attr \for(value val)

```

## function form {#lang-html5-DOM-form}

```rascal
HTML5Attr form(value val)

```

## function formaction {#lang-html5-DOM-formaction}

```rascal
HTML5Attr formaction(value val)

```

## function formenctype {#lang-html5-DOM-formenctype}

```rascal
HTML5Attr formenctype(value val)

```

## function formmethod {#lang-html5-DOM-formmethod}

```rascal
HTML5Attr formmethod(value val)

```

## function formnovalidate {#lang-html5-DOM-formnovalidate}

```rascal
HTML5Attr formnovalidate(value val)

```

## function formtarget {#lang-html5-DOM-formtarget}

```rascal
HTML5Attr formtarget(value val)

```

## function headers {#lang-html5-DOM-headers}

```rascal
HTML5Attr headers(value val)

```

## function height {#lang-html5-DOM-height}

```rascal
HTML5Attr height(value val)

```

## function hidden {#lang-html5-DOM-hidden}

```rascal
HTML5Attr hidden(value val)

```

## function high {#lang-html5-DOM-high}

```rascal
HTML5Attr high(value val)

```

## function href {#lang-html5-DOM-href}

```rascal
HTML5Attr href(value val)

```

## function hreflang {#lang-html5-DOM-hreflang}

```rascal
HTML5Attr hreflang(value val)

```

## function http {#lang-html5-DOM-http}

```rascal
HTML5Attr http(value val)

```

## function icon {#lang-html5-DOM-icon}

```rascal
HTML5Attr icon(value val)

```

## function id {#lang-html5-DOM-id}

```rascal
HTML5Attr id(value val)

```

## function inlist {#lang-html5-DOM-inlist}

```rascal
HTML5Attr inlist(value val)

```

## function ismap {#lang-html5-DOM-ismap}

```rascal
HTML5Attr ismap(value val)

```

## function itemid {#lang-html5-DOM-itemid}

```rascal
HTML5Attr itemid(value val)

```

## function itemprop {#lang-html5-DOM-itemprop}

```rascal
HTML5Attr itemprop(value val)

```

## function itemref {#lang-html5-DOM-itemref}

```rascal
HTML5Attr itemref(value val)

```

## function itemscope {#lang-html5-DOM-itemscope}

```rascal
HTML5Attr itemscope(value val)

```

## function itemtype {#lang-html5-DOM-itemtype}

```rascal
HTML5Attr itemtype(value val)

```

## function keytype {#lang-html5-DOM-keytype}

```rascal
HTML5Attr keytype(value val)

```

## function kind {#lang-html5-DOM-kind}

```rascal
HTML5Attr kind(value val)

```

## function label {#lang-html5-DOM-label}

```rascal
HTML5Attr label(value val)

```

## function lang {#lang-html5-DOM-lang}

```rascal
HTML5Attr lang(value val)

```

## function language {#lang-html5-DOM-language}

```rascal
HTML5Attr language(value val)

```

## function \list {#lang-html5-DOM-\list}

```rascal
HTML5Attr \list(value val)

```

## function local_ {#lang-html5-DOM-local_}

```rascal
HTML5Attr local_(value val)

```

## function loop {#lang-html5-DOM-loop}

```rascal
HTML5Attr loop(value val)

```

## function low {#lang-html5-DOM-low}

```rascal
HTML5Attr low(value val)

```

## function manifest {#lang-html5-DOM-manifest}

```rascal
HTML5Attr manifest(value val)

```

## function max {#lang-html5-DOM-max}

```rascal
HTML5Attr max(value val)

```

## function maxlength {#lang-html5-DOM-maxlength}

```rascal
HTML5Attr maxlength(value val)

```

## function media {#lang-html5-DOM-media}

```rascal
HTML5Attr media(value val)

```

## function mediagroup {#lang-html5-DOM-mediagroup}

```rascal
HTML5Attr mediagroup(value val)

```

## function method {#lang-html5-DOM-method}

```rascal
HTML5Attr method(value val)

```

## function min {#lang-html5-DOM-min}

```rascal
HTML5Attr min(value val)

```

## function multiple {#lang-html5-DOM-multiple}

```rascal
HTML5Attr multiple(value val)

```

## function muted {#lang-html5-DOM-muted}

```rascal
HTML5Attr muted(value val)

```

## function name {#lang-html5-DOM-name}

```rascal
HTML5Attr name(value val)

```

## function novalidate {#lang-html5-DOM-novalidate}

```rascal
HTML5Attr novalidate(value val)

```

## function onabort {#lang-html5-DOM-onabort}

```rascal
HTML5Attr onabort(value val)

```

## function onafterprint {#lang-html5-DOM-onafterprint}

```rascal
HTML5Attr onafterprint(value val)

```

## function onbeforeprint {#lang-html5-DOM-onbeforeprint}

```rascal
HTML5Attr onbeforeprint(value val)

```

## function onbeforeunload {#lang-html5-DOM-onbeforeunload}

```rascal
HTML5Attr onbeforeunload(value val)

```

## function onblur {#lang-html5-DOM-onblur}

```rascal
HTML5Attr onblur(value val)

```

## function oncanplay {#lang-html5-DOM-oncanplay}

```rascal
HTML5Attr oncanplay(value val)

```

## function oncanplaythrough {#lang-html5-DOM-oncanplaythrough}

```rascal
HTML5Attr oncanplaythrough(value val)

```

## function onchange {#lang-html5-DOM-onchange}

```rascal
HTML5Attr onchange(value val)

```

## function onclick {#lang-html5-DOM-onclick}

```rascal
HTML5Attr onclick(value val)

```

## function oncontextmenu {#lang-html5-DOM-oncontextmenu}

```rascal
HTML5Attr oncontextmenu(value val)

```

## function ondblclick {#lang-html5-DOM-ondblclick}

```rascal
HTML5Attr ondblclick(value val)

```

## function ondrag {#lang-html5-DOM-ondrag}

```rascal
HTML5Attr ondrag(value val)

```

## function ondragend {#lang-html5-DOM-ondragend}

```rascal
HTML5Attr ondragend(value val)

```

## function ondragenter {#lang-html5-DOM-ondragenter}

```rascal
HTML5Attr ondragenter(value val)

```

## function ondragleave {#lang-html5-DOM-ondragleave}

```rascal
HTML5Attr ondragleave(value val)

```

## function ondragover {#lang-html5-DOM-ondragover}

```rascal
HTML5Attr ondragover(value val)

```

## function ondragstart {#lang-html5-DOM-ondragstart}

```rascal
HTML5Attr ondragstart(value val)

```

## function ondrop {#lang-html5-DOM-ondrop}

```rascal
HTML5Attr ondrop(value val)

```

## function ondurationchange {#lang-html5-DOM-ondurationchange}

```rascal
HTML5Attr ondurationchange(value val)

```

## function onemptied {#lang-html5-DOM-onemptied}

```rascal
HTML5Attr onemptied(value val)

```

## function onended {#lang-html5-DOM-onended}

```rascal
HTML5Attr onended(value val)

```

## function onerror {#lang-html5-DOM-onerror}

```rascal
HTML5Attr onerror(value val)

```

## function onfocus {#lang-html5-DOM-onfocus}

```rascal
HTML5Attr onfocus(value val)

```

## function onformchange {#lang-html5-DOM-onformchange}

```rascal
HTML5Attr onformchange(value val)

```

## function onforminput {#lang-html5-DOM-onforminput}

```rascal
HTML5Attr onforminput(value val)

```

## function onhashchange {#lang-html5-DOM-onhashchange}

```rascal
HTML5Attr onhashchange(value val)

```

## function oninput {#lang-html5-DOM-oninput}

```rascal
HTML5Attr oninput(value val)

```

## function oninvalid {#lang-html5-DOM-oninvalid}

```rascal
HTML5Attr oninvalid(value val)

```

## function onkeydown {#lang-html5-DOM-onkeydown}

```rascal
HTML5Attr onkeydown(value val)

```

## function onkeypress {#lang-html5-DOM-onkeypress}

```rascal
HTML5Attr onkeypress(value val)

```

## function onkeyup {#lang-html5-DOM-onkeyup}

```rascal
HTML5Attr onkeyup(value val)

```

## function onload {#lang-html5-DOM-onload}

```rascal
HTML5Attr onload(value val)

```

## function onloadeddata {#lang-html5-DOM-onloadeddata}

```rascal
HTML5Attr onloadeddata(value val)

```

## function onloadedmetadata {#lang-html5-DOM-onloadedmetadata}

```rascal
HTML5Attr onloadedmetadata(value val)

```

## function onloadstart {#lang-html5-DOM-onloadstart}

```rascal
HTML5Attr onloadstart(value val)

```

## function onmessage {#lang-html5-DOM-onmessage}

```rascal
HTML5Attr onmessage(value val)

```

## function onmousedown {#lang-html5-DOM-onmousedown}

```rascal
HTML5Attr onmousedown(value val)

```

## function onmousemove {#lang-html5-DOM-onmousemove}

```rascal
HTML5Attr onmousemove(value val)

```

## function onmouseout {#lang-html5-DOM-onmouseout}

```rascal
HTML5Attr onmouseout(value val)

```

## function onmouseover {#lang-html5-DOM-onmouseover}

```rascal
HTML5Attr onmouseover(value val)

```

## function onmouseup {#lang-html5-DOM-onmouseup}

```rascal
HTML5Attr onmouseup(value val)

```

## function onmousewheel {#lang-html5-DOM-onmousewheel}

```rascal
HTML5Attr onmousewheel(value val)

```

## function onoffline {#lang-html5-DOM-onoffline}

```rascal
HTML5Attr onoffline(value val)

```

## function ononline {#lang-html5-DOM-ononline}

```rascal
HTML5Attr ononline(value val)

```

## function onpagehide {#lang-html5-DOM-onpagehide}

```rascal
HTML5Attr onpagehide(value val)

```

## function onpageshow {#lang-html5-DOM-onpageshow}

```rascal
HTML5Attr onpageshow(value val)

```

## function onpause {#lang-html5-DOM-onpause}

```rascal
HTML5Attr onpause(value val)

```

## function onplay {#lang-html5-DOM-onplay}

```rascal
HTML5Attr onplay(value val)

```

## function onplaying {#lang-html5-DOM-onplaying}

```rascal
HTML5Attr onplaying(value val)

```

## function onpopstate {#lang-html5-DOM-onpopstate}

```rascal
HTML5Attr onpopstate(value val)

```

## function onprogress {#lang-html5-DOM-onprogress}

```rascal
HTML5Attr onprogress(value val)

```

## function onratechange {#lang-html5-DOM-onratechange}

```rascal
HTML5Attr onratechange(value val)

```

## function onredo {#lang-html5-DOM-onredo}

```rascal
HTML5Attr onredo(value val)

```

## function onreset {#lang-html5-DOM-onreset}

```rascal
HTML5Attr onreset(value val)

```

## function onresize {#lang-html5-DOM-onresize}

```rascal
HTML5Attr onresize(value val)

```

## function onscroll {#lang-html5-DOM-onscroll}

```rascal
HTML5Attr onscroll(value val)

```

## function onseeked {#lang-html5-DOM-onseeked}

```rascal
HTML5Attr onseeked(value val)

```

## function onseeking {#lang-html5-DOM-onseeking}

```rascal
HTML5Attr onseeking(value val)

```

## function onselect {#lang-html5-DOM-onselect}

```rascal
HTML5Attr onselect(value val)

```

## function onshow {#lang-html5-DOM-onshow}

```rascal
HTML5Attr onshow(value val)

```

## function onstalled {#lang-html5-DOM-onstalled}

```rascal
HTML5Attr onstalled(value val)

```

## function onstorage {#lang-html5-DOM-onstorage}

```rascal
HTML5Attr onstorage(value val)

```

## function onsubmit {#lang-html5-DOM-onsubmit}

```rascal
HTML5Attr onsubmit(value val)

```

## function onsuspend {#lang-html5-DOM-onsuspend}

```rascal
HTML5Attr onsuspend(value val)

```

## function ontimeupdate {#lang-html5-DOM-ontimeupdate}

```rascal
HTML5Attr ontimeupdate(value val)

```

## function onundo {#lang-html5-DOM-onundo}

```rascal
HTML5Attr onundo(value val)

```

## function onunload {#lang-html5-DOM-onunload}

```rascal
HTML5Attr onunload(value val)

```

## function onvolumechange {#lang-html5-DOM-onvolumechange}

```rascal
HTML5Attr onvolumechange(value val)

```

## function onwaiting {#lang-html5-DOM-onwaiting}

```rascal
HTML5Attr onwaiting(value val)

```

## function open {#lang-html5-DOM-open}

```rascal
HTML5Attr open(value val)

```

## function optimum {#lang-html5-DOM-optimum}

```rascal
HTML5Attr optimum(value val)

```

## function pattern {#lang-html5-DOM-pattern}

```rascal
HTML5Attr pattern(value val)

```

## function ping {#lang-html5-DOM-ping}

```rascal
HTML5Attr ping(value val)

```

## function placeholder {#lang-html5-DOM-placeholder}

```rascal
HTML5Attr placeholder(value val)

```

## function poster {#lang-html5-DOM-poster}

```rascal
HTML5Attr poster(value val)

```

## function prefix {#lang-html5-DOM-prefix}

```rascal
HTML5Attr prefix(value val)

```

## function preload {#lang-html5-DOM-preload}

```rascal
HTML5Attr preload(value val)

```

## function property {#lang-html5-DOM-property}

```rascal
HTML5Attr property(value val)

```

## function radiogroup {#lang-html5-DOM-radiogroup}

```rascal
HTML5Attr radiogroup(value val)

```

## function readonly {#lang-html5-DOM-readonly}

```rascal
HTML5Attr readonly(value val)

```

## function \rel {#lang-html5-DOM-\rel}

```rascal
HTML5Attr \rel(value val)

```

## function required {#lang-html5-DOM-required}

```rascal
HTML5Attr required(value val)

```

## function resource {#lang-html5-DOM-resource}

```rascal
HTML5Attr resource(value val)

```

## function rev {#lang-html5-DOM-rev}

```rascal
HTML5Attr rev(value val)

```

## function reversed {#lang-html5-DOM-reversed}

```rascal
HTML5Attr reversed(value val)

```

## function role {#lang-html5-DOM-role}

```rascal
HTML5Attr role(value val)

```

## function rows {#lang-html5-DOM-rows}

```rascal
HTML5Attr rows(value val)

```

## function rowspan {#lang-html5-DOM-rowspan}

```rascal
HTML5Attr rowspan(value val)

```

## function sandbox {#lang-html5-DOM-sandbox}

```rascal
HTML5Attr sandbox(value val)

```

## function scope {#lang-html5-DOM-scope}

```rascal
HTML5Attr scope(value val)

```

## function scoped {#lang-html5-DOM-scoped}

```rascal
HTML5Attr scoped(value val)

```

## function seamless {#lang-html5-DOM-seamless}

```rascal
HTML5Attr seamless(value val)

```

## function selected {#lang-html5-DOM-selected}

```rascal
HTML5Attr selected(value val)

```

## function shape {#lang-html5-DOM-shape}

```rascal
HTML5Attr shape(value val)

```

## function size {#lang-html5-DOM-size}

```rascal
HTML5Attr size(value val)

```

## function sizes {#lang-html5-DOM-sizes}

```rascal
HTML5Attr sizes(value val)

```

## function span {#lang-html5-DOM-span}

```rascal
HTML5Attr span(value val)

```

## function spellcheck {#lang-html5-DOM-spellcheck}

```rascal
HTML5Attr spellcheck(value val)

```

## function src {#lang-html5-DOM-src}

```rascal
HTML5Attr src(value val)

```

## function srcdoc {#lang-html5-DOM-srcdoc}

```rascal
HTML5Attr srcdoc(value val)

```

## function srclang {#lang-html5-DOM-srclang}

```rascal
HTML5Attr srclang(value val)

```

## function \start {#lang-html5-DOM-\start}

```rascal
HTML5Attr \start(value val)

```

## function step {#lang-html5-DOM-step}

```rascal
HTML5Attr step(value val)

```

## function style {#lang-html5-DOM-style}

```rascal
HTML5Attr style(value val)

```

## function tabindex {#lang-html5-DOM-tabindex}

```rascal
HTML5Attr tabindex(value val)

```

## function target {#lang-html5-DOM-target}

```rascal
HTML5Attr target(value val)

```

## function template {#lang-html5-DOM-template}

```rascal
HTML5Attr template(value val)

```

## function translate {#lang-html5-DOM-translate}

```rascal
HTML5Attr translate(value val)

```

## function \type {#lang-html5-DOM-\type}

```rascal
HTML5Attr \type(value val)

```

## function typeof {#lang-html5-DOM-typeof}

```rascal
HTML5Attr typeof(value val)

```

## function usemap {#lang-html5-DOM-usemap}

```rascal
HTML5Attr usemap(value val)

```

## function valign {#lang-html5-DOM-valign}

```rascal
HTML5Attr valign(value val)

```

## function \value {#lang-html5-DOM-\value}

```rascal
HTML5Attr \value(value val)

```

## function vocab {#lang-html5-DOM-vocab}

```rascal
HTML5Attr vocab(value val)

```

## function width {#lang-html5-DOM-width}

```rascal
HTML5Attr width(value val)

```

## function wrap {#lang-html5-DOM-wrap}

```rascal
HTML5Attr wrap(value val)

```

## function xml_base {#lang-html5-DOM-xml_base}

```rascal
HTML5Attr xml_base(value val)

```

## function xml_id {#lang-html5-DOM-xml_id}

```rascal
HTML5Attr xml_id(value val)

```

## function xml_lang {#lang-html5-DOM-xml_lang}

```rascal
HTML5Attr xml_lang(value val)

```

## function xml_space {#lang-html5-DOM-xml_space}

```rascal
HTML5Attr xml_space(value val)

```

## function isVoid {#lang-html5-DOM-isVoid}

```rascal
bool isVoid(str x)

```

## function isRawText {#lang-html5-DOM-isRawText}

```rascal
bool isRawText(str x)

```

## function isEscapableRawText {#lang-html5-DOM-isEscapableRawText}

```rascal
bool isEscapableRawText(str x)

```

## function isBlockLevel {#lang-html5-DOM-isBlockLevel}

```rascal
bool isBlockLevel(str x)

```

## function startTag {#lang-html5-DOM-startTag}

```rascal
str startTag(str n, str attrs)

```

## function endTag {#lang-html5-DOM-endTag}

```rascal
str endTag(str n)

```

## function startTag {#lang-html5-DOM-startTag}

```rascal
str startTag(str n, {})

default str startTag(str n, set[HTML5Attr] attrs)

```

## function attrsToString {#lang-html5-DOM-attrsToString}

```rascal
str attrsToString(set[HTML5Attr] attrs)

```

## function attrToString {#lang-html5-DOM-attrToString}

```rascal
str attrToString(html5attr(str x, value v))

```

## function rawText {#lang-html5-DOM-rawText}

```rascal
str rawText(list[value] xs)

```

## function escapableRawText {#lang-html5-DOM-escapableRawText}

```rascal
str escapableRawText(list[value] xs)

```

## function kidsToString {#lang-html5-DOM-kidsToString}

```rascal
str kidsToString(list[value] kids)

```

## function kidToString {#lang-html5-DOM-kidToString}

```rascal
str kidToString(HTML5Node elt)

str kidToString(HTML5Attr x)

default str kidToString(value x)

```

## function nodeToString {#lang-html5-DOM-nodeToString}

```rascal
str nodeToString(str n, set[HTML5Attr] attrs, list[value] kids)

```

## function toString {#lang-html5-DOM-toString}

```rascal
str toString(HTML5Node x)

```

#### Synopsis

pretty print HTML5Node DOM to a string

## function serve {#lang-html5-DOM-serve}

```rascal
Content serve(HTML5Node x)

```

#### Synopsis

convenience function to render the HTML5Node dom tree in the browser

