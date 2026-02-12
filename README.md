Litepicker - Enhanced Fork
=========

Date range picker - lightweight, no dependencies

> **Note:** This is an enhanced fork of the original [Litepicker](https://github.com/wakirin/Litepicker) project by [wakirin](https://github.com/wakirin). All credit for the original implementation goes to the original authors.

## About This Fork

This fork includes enhanced features for improved independent start/end date selection with separate input fields:

* **Independent date editing** - Edit start and end dates independently when both `element` and `elementEnd` are defined
* **Real-time updates** - Input fields update immediately upon date selection
* **Smart date validation** - Invalid date ranges are handled by resetting the conflicting date
* **Initial state support** - Textboxes update correctly even when selecting the first date

All original Litepicker features are preserved and functional.

## Original Features
* No dependencies
* Single date or date range
* Show multiple months
* Min/Max days for select and/or Min/Max dates for select
* Select forward/backward
* Inline mode
* Repick date range
* Lock days  
* Keyboard accessibility (with plugin)
* Mobile friendly (with plugin)
* Predefined ranges (with plugin)
* Multiple select (with plugin)

## Installation

```bash
npm install
npm run prod
```

## Usage with Enhanced Features

To take advantage of the enhanced independent date selection:

```javascript
const picker = new Litepicker({
  element: document.getElementById('start-date'),
  elementEnd: document.getElementById('end-date'),
  singleMode: false,
  // ... other options
});
```

**Key behaviors:**
- Click on start input and select a date → start field updates immediately
- Click on end input and select a date → end field updates immediately  
- If start date > end date → end date is reset (cleared)
- If end date < start date → start date is reset (cleared)

See [FORK_CHANGES.md](./FORK_CHANGES.md) for detailed implementation notes.

## Documentation

For general documentation on Litepicker features and API, refer to the [original documentation](https://litepicker.com).

## Compatibility

##### Desktop
- IE 11 (required polyfills)
- Edge 17+
- Chrome 60+
- Firefox 52+
- Safari 10.1+
- Opera 48+

##### Mobile
- iOS 10+
  - Safari
  - Chrome
- Android 7+
  - Chrome
  - Firefox
  - Samsung Browser
  - UC Browser

## Plugins

All original Litepicker plugins are supported:

* **keyboardnav** - adds keyboard navigation
* **mobilefriendly** - adds swipes (left/right) to switch months
* **ranges** - adds predefined ranges
* **multiselect** - adds multiple selection
* **halfrange** - adds half range selection

Refer to the [original documentation](https://litepicker.com/docs/plugins/) for plugin usage details.

## Credits

This project is a fork of [Litepicker](https://github.com/wakirin/Litepicker) created by [wakirin](https://github.com/wakirin).

Special thanks to:
- The original Litepicker authors and contributors
- The open-source community

## License

This project maintains the same license as the original Litepicker project.

## Original Project

To support the original Litepicker project and its author, please visit:
- [Original Repository](https://github.com/wakirin/Litepicker)
- [Official Documentation](https://litepicker.com)
- [Support the Original Author](https://ko-fi.com/wakirin)