# Chrome Extension Project - Readme

## Cloning and Running the Chrome Extension

This readme file will guide you through the process of cloning a repository and running a Chrome extension using the "Load Unpacked" option in Google Chrome.

### Prerequisites

Before proceeding, make sure you have the following installed on your system:

1. **Google Chrome Browser**: You must have the Google Chrome web browser installed on your computer.
2. **Git**: To clone the repository, you'll need Git installed. You can download it from https://git-scm.com/downloads if you don't have it already.

### Step 1: Clone the Repository

1. Open a terminal or command prompt on your computer.
2. Navigate to the directory where you want to clone the repository.
3. Use the following command to clone the repository:    

  
  ```git clone https://github.com/Rahul-1611/AdviceChromeExtension```

4. Once the cloning process is complete, you will have the project files on your local machine.

### Step 2: Load the Extension in Google Chrome

1. Open Google Chrome browser.
2. In the address bar, type `chrome://extensions/` and press Enter. This will take you to the Extensions page.

   ![Extensions Page](https://example.com/extensions-page.png)

3. In the top right corner of the Extensions page, make sure the **Developer mode** toggle is enabled (switched on).

4. After enabling Developer mode, you will see three buttons appear at the top left of the Extensions page.

5. Click on the **"Load unpacked"** button. A file dialog will appear.

6. Navigate to the folder where you cloned the repository in Step 1, and select the root folder of the extension (the folder containing the `manifest.json` file).

7. Click the **"Select Folder"** button. Google Chrome will now load the extension.

### Step 3: Verify and Use the Extension

1. Once the extension is successfully loaded, you should see its icon in the Chrome toolbar, typically located to the right of the address bar.

2. Click on the extension's icon to interact with the extension.

3. Follow any specific instructions provided by the extension's documentation or README file to use its functionality.

### Updating the Extension

If you make changes to the extension's code after cloning the repository, you'll need to update the loaded extension in Chrome:

1. Go back to the Extensions page (`chrome://extensions/`).

2. Find your extension in the list and click the **"Reload"** button (the circular arrow icon) below the extension entry.

3. This will update the extension with your latest changes.

### Removing the Extension

If you want to remove the loaded extension from Chrome:

1. Go to the Extensions page (`chrome://extensions/`).

2. Find your extension in the list and click the **"Remove"** button (the trash can icon) below the extension entry.

3. Confirm the removal when prompted.

That's it! You have successfully cloned a repository and loaded an unpacked Chrome extension using the "Load Unpacked" option in Google Chrome. Now you can explore and use the extension's features directly in your browser. Happy coding!

