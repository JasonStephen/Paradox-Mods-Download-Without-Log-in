# Paradox Mods Download Without Log-in / Paradox Mods 免登录下载 🚀

![Tampermonkey](https://img.shields.io/badge/Tampermonkey-Script-blue)  
![License](https://img.shields.io/badge/License-Personal%20Use%20Only-red)  
![Year](https://img.shields.io/badge/Year-2025-green)

## Introduction / 简介 📖

This script is designed to automatically download specified mod files from the **Paradox Mods** website without requiring a login.  
**Note: This script is strictly for personal use in learning programming techniques. It must not be used for any other purposes, especially not for any actions that could harm Paradox Mods.**

此脚本用于自动从 **Paradox Mods** 网站下载指定模组文件，无需登录即可完成下载。  
**注意：本脚本仅限个人学习编程技术使用，切勿用于其他用途，严禁用于损害 Paradox Mods 的行为中。**

---

## Features / 功能特点 ✨

- **Bypass Login for Downloads**: Automatically identifies mod IDs and calls the Paradox Mods API to fetch download links, allowing mod downloads without logging in.  
  **绕过登录下载**：自动识别模组 ID，调用 Paradox Mods API 获取下载地址，无需登录即可下载模组。

- **Automatic Filename Correction**: Downloaded mod files are named in the format `<modid>_<version>.zip`, making them easy to import into Paradox Mods clients (e.g., *Cities: Skylines 2*).  
  **文件名自动更正**：下载的模组文件命名规则为 `<modid>_<version>.zip`，方便导入 Paradox Mods 客户端（如《都市天际线2》）。

- **Strong Compatibility**: Works with mods from all games available on the Paradox Mods web platform.  
  **兼容性强**：适用于来自 Paradox Mods 网页端的所有游戏的模组。

---

## Usage Instructions / 使用说明 🛠️

1. **Install the Script / 安装脚本**: 🧩 
   - Use a user script manager like [Tampermonkey](https://www.tampermonkey.net/).  

   - 使用 [Tampermonkey](https://www.tampermonkey.net/) 等用户脚本管理器。

2. **Download Mods / 下载模组**:  ⬇️
   - Visit the Paradox Mods website and navigate to the page of the mod you wish to download.  
   - Click the **Download mod** button, and the script will automatically handle the download without prompting a login window (you still need to log in to add mods to your playset and to comment on mods).  

   - 访问 Paradox Mods 网站，找到你想要下载的模组页面。  
   - 点击 **Download mod** 按钮，脚本会自动完成下载，而不再弹出登录窗口（你仍然需要登录来将模组添加到 playset 以及评论模组）。

4. **Filename Explanation / 文件名说明**:  📄
   - The default filename format is `<modid>_<version>.zip`, which is convenient for direct import into Paradox Mods clients.  
   - If you prefer to use the original filename format (`<name>_<version>.zip`), modify the `GM_download` section in the script as follows:  

   - 默认文件名格式为 `<modid>_<version>.zip`，方便直接导入 Paradox Mods 客户端。  
   - 如果需要使用原始文件名（`<name>_<version>.zip`），请修改脚本中的 `GM_download` 部分：  
     ```javascript
     name: `${modId}_${modVersion}.zip` // 修改为 `${name}_${modVersion}.zip`
     ```

---

## Disclaimer / 免责声明 ⚠️

- The code for this project is publicly available and is **strictly for personal use in learning programming techniques**.  
  It is strictly prohibited to use this project for any actions that could harm Paradox Mods.  
  The author is not responsible for any consequences arising from the use of this project.  

- 本项目代码公开，**仅限个人学习编程技术使用**。  
  严禁将本项目用于任何损害 Paradox Mods 的行为中。  
  作者不对因使用本项目而产生的任何后果负责。

---

## License / 许可证 📄

This project is licensed under a **Personal Use License**. It is prohibited to use this project for any commercial or illegal purposes.  
本项目遵循 **个人使用许可**，禁止用于任何商业或非法用途。
