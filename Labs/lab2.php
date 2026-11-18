<?php // Bayan Alharbi - 2305950 ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>CPIT-405 lab 2</title>
</head>
<body>

    <!-- 1. Basic HTML Document Requirements -->
    <h1>Lab 2: HTML</h1>
    
    <a href="https://cpit405.gitlab.io">CPIT-405 Link</a>

    <p>This is the first paragraph with some dummy text.</p>
    <hr>
    <p>This is the second paragraph after the horizontal line.</p>

    <a href="https://github.com">
    <img src="../images/my-image.jpeg" alt="Pinterest image">
    </a>

    <!-- 2. Paragraphs with formatting tags -->
    <p>This text is <strong>strong</strong>.</p>
    <p>This text is <em>emphasized</em>.</p>
    <p>This is <sup>superscript</sup> text.</p>
    <p>This is <sub>subscript</sub> text.</p>
    <p>This is a <span style="color: blue;">span</span> element.</p>

    <!-- 3. Headings -->
    <h1>Heading elements</h1>
    
    <h2>Summary</h2>
    <p>Some text here...</p>
    
    <h2>Examples</h2>
    <h3>Example 1</h3>
    <p>Some text here...</p>
    <h3>Example 2</h3>
    <p>Some text here...</p>
    
    <h2>See also</h2>
    <p>Some text here...</p>

    <!-- 4. Lists -->
    <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ol>

    <ul>
        <li>Item A</li>
        <li>Item B</li>
        <li>Item C</li>
    </ul>

    <dl>
        <dt>HTML</dt>
        <dd>HyperText Markup Language</dd>
        <dt>CSS</dt>
        <dd>Cascading Style Sheets</dd>
    </dl>

    <!-- 5. Table -->
    <table border="1">
        <tr>
            <th>Basics</th>
            <th>Front-end Frameworks</th>
            <th>Server-side frameworks</th>
        </tr>
        <tr>
            <td>HTML</td>
            <td>React</td>
            <td>Spring</td>
        </tr>
        <tr>
            <td>CSS</td>
            <td>Angular</td>
            <td>Django</td>
        </tr>
        <tr>
            <td>JS</td>
            <td>Vue</td>
            <td>Laravel</td>
        </tr>
    </table>
    <br>

    <!-- 6. Form -->
    <form action="../controllers/form_controller.php" method="POST">
        <input type="text" name="login" placeholder="Login"><br><br>
        <input type="password" name="password" placeholder="Password"><br><br>
        <input type="submit" value="Submit">
    </form>

</body>
</html>
