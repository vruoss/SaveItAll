# SaveItAll - Smart Web Content Saver 
for Chrome, Microsoft Edge & other Chromium-based browsers
</br></br>
<div align="center">
  <img src="https://github.com/vruoss/SaveItAll/blob/main/SaveItAll.png" alt="SaveItAll Logo" width="725" height="437">
  <h3>AI-Powered Web Content Extraction & Organization
1,5min Tutorial
<a href="https://vimeo.com/1066980490?share=copy" target="_blank">https://vimeo.com/1066980490?share=copy</a>
</h3>
</div>






## 🌟 Features

- **Smart Content Extraction**: Automatically extracts relevant information from any webpage using AI
- **Customizable Fields**: Create and customize fields to capture exactly what matters to you
- **Multiple Lists**: Organize saved items into different lists for better categorization
- **Quick Access**: Right-click (Mac: two-finger tap) anywhere on a webpage to save content
- **Export Capability**: Export your saved items to Excel with one click
- **Favorites System**: Star important items for quick access
- **Offline Storage**: All your data is stored locally in your browser
- **Privacy First**: Your OpenAI API key never leaves your browser

## 🚀 Getting Started

1. Install the extension from the Chrome Web Store
2. Click the extension icon to open the dashboard
3. Get your OpenAI API key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
4. Enter your API key in the extension settings
5. Start saving web content!

## 💡 How to Use

### Basic Usage

1. Visit any webpage you want to save
2. Right-click anywhere on the page (Mac: two-finger tap)
3. Select "SaveItAll" from the context menu
4. Review and edit the extracted information
5. Click "Save Item" to add it to your list

### Managing Lists

- Create multiple lists for different types of content
- Switch between lists using the dropdown menu
- Rename lists to keep things organized
- Add custom fields to each list

### Customizing Fields

- Add new fields for specific information you want to capture
- Remove unnecessary fields
- Rename fields to match your needs
- Fields are saved per list

### Exporting Data

1. Navigate to any list
2. Click the Excel icon in the top right
3. Your list will be downloaded as an Excel file

## 🛠️ Technical Details

### Architecture

- Built with React + TypeScript + Vite
- Uses OpenAI's GPT-3.5 Turbo for content extraction
- Chrome Extension Manifest V3 compliant
- Local storage for data persistence
- Tailwind CSS for styling

### AI Integration

The extension uses OpenAI's GPT-3.5 Turbo to:
- Extract relevant information from webpage content
- Identify key details like prices, names, and descriptions
- Handle content in multiple languages
- Adapt to different webpage structures

### Security

- API keys are stored securely in Chrome's local storage
- No data is sent to external servers (except OpenAI API calls)
- All saved content remains in your browser
- No tracking or analytics

### Performance

- Lazy loading for optimal performance
- Efficient data storage and retrieval
- Minimal CPU/memory footprint
- Fast content extraction

## 📝 Field Types

Default fields include:
- **Picture**: Automatically extracts the main image
- **Link**: Saves the webpage URL
- **Name**: Extracts the title/name
- **Price**: Identifies and formats pricing information

Custom fields can extract:
- Product details
- Descriptions
- Specifications
- Dates
- Categories
- Any other text-based information

## ⚙️ Settings

- Toggle review screen before saving
- Customize extraction preferences
- Manage API key
- Export/import data

## 🔒 Privacy

SaveItAll respects your privacy:
- No data collection
- No external servers
- No tracking
- Local storage only
- Your API key stays in your browser

## 🌐 Browser Support

Currently supports:
- Google Chrome
- Microsoft Edge
- Other Chromium-based browsers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for their powerful API
- React team for the excellent framework
- Chrome Extensions team for the platform
- All contributors and users

## 📧 Support

For support, please:
1. Check the [Issues](https://github.com/yourusername/saveitall/issues) page
2. Create a new issue if needed
3. Provide detailed information about your problem

---

<div align="center">
  Made with ❤️ by Valentin Ruoß
</div>
