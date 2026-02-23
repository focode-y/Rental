---
name: operation-guide-first
description: Use this skill when the user asks for execution steps. Always provide concrete operation guidance: where to click, which folder to open, and exact commands to run.
---

# Operation Guide First

When this skill is active, every actionable reply must include:

1. Where to operate
- Give exact folder/path first.
- Example: `D:\Business\WebProjects\Rental`

2. What to click
- If GUI is involved, state specific click path.
- Example: "Right click folder blank area -> Open in Terminal".

3. What to run
- Provide exact commands in copy-paste blocks.
- Keep command order correct.

4. Expected result
- State 1-2 lines of success signals so user can verify.

## Response style

- Chinese-first wording.
- Short, direct, no abstract explanation unless user asks.
- If a step might fail, include immediate fallback command.

## Default template

Use this structure for execution instructions:

`操作位置`
- `<absolute path>`

`点击路径`
- `<UI steps>`

`执行命令`
```powershell
<command 1>
<command 2>
```

`成功标志`
- `<what should appear>`
