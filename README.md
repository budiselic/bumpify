# 🚀 Bumpify - Smarter Versioning for Your Projects

[![npm version](https://img.shields.io/npm/v/bumpify-cli.svg)](https://www.npmjs.com/package/bumpify-cli)
[![License](https://img.shields.io/npm/l/bumpify-cli.svg)](https://github.com/budiselic/bumpify-cli/blob/main/LICENSE)

### 🔥 The best way to bump your version and keep `version.json` in sync!

`bumpify-cli` extends `npm version patch/minor/major` with additional automation:
- ✅ **Updates `package.json`** (like `npm version`)
- ✅ **Creates/updates `public/version.json`** automatically
- ✅ **Commits & tags the changes in Git**

---

## 🚀 **Installation**
Install `bumpify-cli` globally to use it in any project:
```sh
npm install -g bumpify-cli
```

---

## 🔧 **Usage**
Run `bumpify` just like `npm version`:

```sh
bumpify version patch
bumpify version minor
bumpify version major
```

### **What Happens When You Run It?**
1. The version in `package.json` is **updated**.
2. The new version is **written to `public/version.json`**.
3. The changes are **committed** (`git commit -m "Bump version to X.X.X"`).
4. A **Git tag** is created (`git tag vX.X.X`).

---

## 🎯 **Examples**

### **Bump a Patch Version**
```sh
bumpify version patch
```
💡 Updates from `1.0.0` → `1.0.1`

### **Bump a Minor Version**
```sh
bumpify version minor
```
💡 Updates from `1.0.0` → `1.1.0`

### **Bump a Major Version**
```sh
bumpify version major
```
💡 Updates from `1.0.0` → `2.0.0`

---

## 📌 **Why Use Bumpify?**

| Feature                               | `npm version` | `bumpify-cli` |
|--------------------------------------|--------------|-----------|
| Updates `package.json`                | ✅ Yes       | ✅ Yes     |
| Creates/updates `public/version.json` | ❌ No        | ✅ Yes     |
| Commits the changes                   | ✅ Yes       | ✅ Yes     |
| Creates a Git tag                     | ✅ Yes       | ✅ Yes     |



---

## 📦 **Uninstall**
If you ever need to remove `bumpify-cli`:
```sh
npm uninstall -g bumpify-cli
```

---

## 📄 **License**
MIT License © [Antonio Budiselić](https://github.com/budiselic)

---

## 👥 **Contributing**
We welcome contributions! To contribute:
1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Added feature XYZ"`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a PR 🚀

---

## 🌟 **Support & Feedback**
If you found `bumpify-cli` helpful, please **star this repo** ⭐ on GitHub and share your feedback!  
For issues or feature requests, open an [issue here](https://github.com/your-username/bumpify/issues).

---

🚀 **Happy versioning with `bumpify-cli`!** 🚀
