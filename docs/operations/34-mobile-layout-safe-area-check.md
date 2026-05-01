# Mobile layout safe-area check

Verify key action buttons remain visible in mobile safe areas.
Inset issues are easy to miss and hard to recover from during live mints.

Verify safe-area padding on iOS notch devices, Android gesture-navigation layouts, and small viewport landscape mode.

Run one landscape viewport check to catch safe-area inset regressions early.

Validate safe-area behavior with browser UI expanded and collapsed, since notch insets can shift between states.

Escalate safe-area regressions that block primary actions on any officially supported mobile device.

Verification evidence: include portrait and landscape screenshots for each tested safe-area scenario.

Follow-up cadence: repeat safe-area checks after CSS layout updates touching viewport spacing.
