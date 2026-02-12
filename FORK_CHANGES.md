# Fork Changes and Enhancements

This document outlines the changes and enhancements made in this fork compared to the original Litepicker project.

## Enhanced Features

### Independent Start/End Date Selection

When both `element` and `elementEnd` are configured, the date picker now supports independent editing of start and end dates:

#### 1. **Real-time Input Updates**
- Textboxes update immediately when dates are selected
- Works correctly in initial state (empty dates) and when modifying existing ranges
- Each input field updates based on which triggered the picker

#### 2. **Smart Date Validation**
- When editing start date: if selected date is greater than end date, the end date is reset (cleared)
- When editing end date: if selected date is less than start date, the start date is reset (cleared)
- This prevents invalid ranges while allowing users to rebuild ranges from their selected date

#### 3. **Improved User Experience**
- Click on start input → select date → start textbox updates immediately
- Click on end input → select date → end textbox updates immediately
- Second date click completes the range with automatic ordering
- Visual feedback maintained throughout the selection process

## Implementation Details

### Modified Files
- `src/litepicker.ts` - Enhanced date selection logic in `onClick` handler
- `src/methods.ts` - Updated input handling methods
- `src/litepicker.ts` - Modified `updateInput()` to handle single date updates

### Key Behavioral Changes

**Before (Original Litepicker):**
- Dates were automatically swapped if selected in reverse order
- Both inputs required full range selection before displaying values
- Limited support for truly independent date editing

**After (This Fork):**
- Invalid date ranges trigger reset of conflicting date
- Individual inputs update immediately upon first date selection
- Full support for independent start/end date editing
- Maintains all original functionality for single input mode

## Compatibility

All changes are backward compatible. The enhancements only activate when:
- Both `element` and `elementEnd` are defined
- `singleMode` is false
- User interactions trigger the enhanced logic

Standard single-input range selection continues to work as in the original Litepicker.

## Credits

All original Litepicker functionality and architecture by [Rinat G. (wakirin)](https://github.com/wakirin)

Enhancements developed: February 2026
