--- /dev/null
+++ c:\KlarPath\design_klarpath.com\pwa.md
@@ -0,0 +1,89 @@
+# PWA Install Instructions Feature Guide
+
+This guide outlines how to implement the "Install App" instructions for Android and iOS on static websites. This feature detects the user's mobile operating system and displays the appropriate installation steps in the footer.
+
+## 1. HTML Structure (Footer)
+
+Add the following code block inside your `<footer>` or a dedicated section at the bottom of the page. It uses Tailwind CSS for styling and FontAwesome for icons.
+
+```html
+<!-- PWA Install Instructions (Hidden by default, shown via JS) -->
+<div id="pwa-install-area" class="mb-8 hidden">
+    
+    <!-- Android Instruction -->
+    <div id="android-btn" class="hidden mx-auto max-w-md bg-surface-color border border-border-color rounded-2xl p-6 shadow-[0_0_20px_var(--glow-color)] text-left transform transition-all hover:scale-105">
+        <div class="flex items-start gap-4">
+            <div class="flex-shrink-0 w-12 h-12 bg-[#3DDC84] rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
+                <i class="fab fa-android"></i>
+            </div>
+            <div>
+                <h4 class="text-lg font-bold text-primary-text-color mb-2">Install App on Android</h4>
+                <ol class="text-sm text-secondary-text-color space-y-1 list-decimal list-inside">
+                    <li>Tap the <strong class="text-primary-text-color">three dots (⋮)</strong> in the top right.</li>
+                    <li>Tap <strong class="text-primary-text-color">"Install app"</strong> or "Add to Home screen".</li>
+                </ol>
+            </div>
+        </div>
+    </div>
+
+    <!-- iOS Instruction -->
+    <div id="ios-btn" class="hidden mx-auto max-w-md bg-surface-color border border-border-color rounded-2xl p-6 shadow-[0_0_20px_var(--glow-color)] text-left transform transition-all hover:scale-105">
+        <div class="flex items-start gap-4">
+            <div class="flex-shrink-0 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-2xl shadow-lg">
+                <i class="fab fa-apple"></i>
+            </div>
+            <div>
+                <h4 class="text-lg font-bold text-primary-text-color mb-2">Install App on iPhone</h4>
+                <ol class="text-sm text-secondary-text-color space-y-1 list-decimal list-inside">
+                    <li>Tap the <strong class="text-primary-text-color">Share icon</strong> <i class="fas fa-arrow-up-from-bracket"></i> at the bottom.</li>
+                    <li>Scroll down and tap <strong class="text-primary-text-color">"Add to Home Screen"</strong>.</li>
+                </ol>
+            </div>
+        </div>
+    </div>
+</div>
+```
+
+## 2. JavaScript Logic
+
+Add this logic to your `main.js` (inside the `DOMContentLoaded` event listener). It detects the OS and unhides the correct instruction block.
+
+```javascript
+// --- PWA Install Logic ---
+function getMobileOS() {
+    const ua = navigator.userAgent;
+    if (/android/i.test(ua)) return "Android";
+    // Detect iOS (iPhone, iPad, iPod) or Mac with touch (iPad Pro)
+    if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) return "iOS";
+    return "Other";
+}
+
+const os = getMobileOS();
+const pwaArea = document.getElementById('pwa-install-area');
+const androidBtn = document.getElementById('android-btn');
+const iosBtn = document.getElementById('ios-btn');
+
+if (pwaArea && (androidBtn || iosBtn)) {
+    if (os === "Android") {
+        pwaArea.classList.remove('hidden');
+        if (androidBtn) androidBtn.classList.remove('hidden');
+    } else if (os === "iOS") {
+        pwaArea.classList.remove('hidden');
+        if (iosBtn) iosBtn.classList.remove('hidden');
+    }
+}
+```
+
+## 3. Dependencies
+
+1.  **Tailwind CSS**: The classes used (e.g., `bg-surface-color`, `hidden`, `rounded-2xl`) rely on Tailwind. Ensure your `tailwind.config.js` or CSS variables define `surface-color`, `border-color`, `primary-text-color`, and `glow-color`.
+2.  **FontAwesome**: Ensure FontAwesome (v6+) is included in your `<head>` for the icons (`fab fa-android`, `fab fa-apple`, `fas fa-arrow-up-from-bracket`).
+    ```html
+    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
+    ```
+
+## 4. Implementation Notes
+
+-   **Placement**: Place the HTML in the footer so it's unobtrusive but accessible.
+-   **Visibility**: The logic ensures these instructions *only* appear on actual mobile devices, keeping the desktop view clean.
+```

<!--
[PROMPT_SUGGESTION]Can you verify if the T&C banner logic in main.js correctly handles the "Buy" buttons on mobile touch events?[/PROMPT_SUGGESTION]
[PROMPT_SUGGESTION]How can I add a "Don't show again" option to the PWA install instructions so users can dismiss them?[/PROMPT_SUGGESTION]
-->
