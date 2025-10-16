// Application data
const presentationData = {
    title: "Excel Logic, AI Power: Bridge Your Skills to the Future of Analytics",
    presenter: "Monika Stoiber"
};

const excelConcepts = [
    {
        title: "Break Problems Into Logical Steps",
        icon: "🔍",
        brief: "Structure your approach systematically",
        detailed_explanation: "Just like writing a complex Excel formula, successful data analysis requires breaking down big problems into smaller, manageable pieces. In Excel, you might create intermediate calculations in separate columns before combining them. Similarly, in AI analytics, you describe each step clearly: first clean the data, then group it, then calculate averages, and finally visualize results. This step-by-step approach ensures accuracy and makes it easier to troubleshoot when something goes wrong.",
        excel_example: "Instead of one complex nested formula, create helper columns for each calculation step",
        ai_equivalent: "Instead of one complex prompt, break your request into clear, sequential instructions"
    },
    {
        title: "Clean and Validate Data",
        icon: "🧹",
        brief: "Use filters, formatting, Power Query",
        detailed_explanation: "In Excel, you know that messy data leads to unreliable results. You use tools like Find & Replace, TRIM functions, data validation, and Power Query to ensure your data is consistent and accurate. AI analytics follows the same principle - garbage in, garbage out. When working with AI tools, you specify exactly what cleaning is needed: standardize formats, handle missing values, remove duplicates, and validate data types. The cleaning process is the same, just described in natural language instead of formulas.",
        excel_example: "Use TRIM(), PROPER(), Find & Replace, Remove Duplicates, Data Validation",
        ai_equivalent: "Prompt: 'Remove extra spaces, standardize capitalization, handle missing values, remove duplicates'"
    },
    {
        title: "Summarize with PivotTables",
        icon: "📊",
        brief: "Create calculations and charts",
        detailed_explanation: "PivotTables are Excel's powerhouse for summarizing large datasets - you drag fields to rows, columns, and values to instantly see patterns and totals. This same analytical thinking translates perfectly to AI. Instead of dragging fields in a PivotTable interface, you ask the AI to 'group sales by region and product, showing totals and averages.' The logic is identical: identify what you want to group by (dimensions) and what you want to calculate (measures), then present it in a clear format.",
        excel_example: "Drag Region to Rows, Product to Columns, Sales to Values, apply SUM function",
        ai_equivalent: "Prompt: 'Create a summary table showing total sales by region and product category'"
    },
    {
        title: "Communicate Findings",
        icon: "📈",
        brief: "Present in tables or dashboards",
        detailed_explanation: "Excel users know that raw data isn't enough - you need clear charts, formatted tables, and sometimes interactive dashboards to tell the story. You choose the right chart type (bar chart for comparisons, line chart for trends), format numbers appropriately, and add clear labels. AI analytics requires the same communication skills. You specify how you want results presented: 'Create a bar chart showing...', 'Format as a professional table with...', or 'Generate a dashboard that highlights...'. Your Excel presentation instincts guide how you ask for AI outputs.",
        excel_example: "Create charts, format tables, use conditional formatting, build dashboards",
        ai_equivalent: "Prompt: 'Present results as a professional chart with clear labels and appropriate formatting'"
    }
];

const excelAIMappings = [
    {
        excel_tool: "PROPER/UPPER/LOWER",
        ai_equivalent: "Standardize capitalization"
    },
    {
        excel_tool: "Filters / IF formulas / Replace",
        ai_equivalent: "Return rows with missing or invalid values"
    },
    {
        excel_tool: "AVERAGE formula / convert data type",
        ai_equivalent: "Impute missing prices with average and convert numeric values"
    },
    {
        excel_tool: "Remove Duplicates and blank rows",
        ai_equivalent: "Remove duplicate records and remove entirely blank rows"
    },
    {
        excel_tool: "PivotTable",
        ai_equivalent: "Summarize sales by region in a table format"
    },
    {
        excel_tool: "Bar Chart",
        ai_equivalent: "Create a bar chart of sales by product"
    }
];

const cleaningSteps = [
    {
        step: 1,
        prompt: "Remove any rows that are completely blank or where essential fields are missing",
        description: "First, we eliminate rows with no useful data - completely empty rows or rows missing critical information like dates, regions, or products.",
        changes: "Removed 1 completely blank row",
        excel_equivalent: {
            title: "Excel: Filter & Delete Blank Rows",
            methods: [
                "Select data range → Data → Filter → Filter for blanks → Delete rows",
                "Use Go To Special → Blanks to select empty cells",
                "Power Query: Remove Empty Rows"
            ],
            formulas: [
                "=IF(COUNTA(A2:G2)=0,\"Delete\",\"Keep\")",
                "Filter using (Blanks) option in filter dropdown"
            ],
            manual_steps: "1. Select your data range\n2. Go to Data → Filter\n3. Click filter arrow on any column\n4. Uncheck '(Blanks)' to hide empty rows\n5. Select visible blank rows and delete"
        },
        messy_data: [
            { order_date: "1/7/2024", region: "north", sales_rep: "jane lee", product: "widgeta", quantity: "twelve", price: "8", customer: "  Acme, Inc.  " },
            { order_date: "1/10/2024", region: "EAST", sales_rep: "SAM PATEL", product: "widgetb", quantity: "5", price: "fifteen", customer: "ACME, INC." },
            { order_date: "", region: "", sales_rep: "", product: "", quantity: "", price: "", customer: "" },
            { order_date: "1/12/2024", region: "South", sales_rep: "ali green", product: "widgeta", quantity: "2", price: "8.0", customer: "Beta Corp" },
            { order_date: "1/15/2024", region: "west ", sales_rep: " Emily Chan", product: "widgetc", quantity: "seven", price: "20", customer: "Acme, Inc." },
            { order_date: "1/15/2024", region: "west ", sales_rep: " Emily Chan", product: "widgetc", quantity: "seven", price: "20", customer: "Acme, Inc." },
            { order_date: "1/18/2024", region: "North", sales_rep: "Jane Lee", product: "widgetb", quantity: "", price: "15", customer: "Tech Solutions" }
        ],
        clean_data: [
            { order_date: "1/7/2024", region: "north", sales_rep: "jane lee", product: "widgeta", quantity: "twelve", price: "8", customer: "  Acme, Inc.  " },
            { order_date: "1/10/2024", region: "EAST", sales_rep: "SAM PATEL", product: "widgetb", quantity: "5", price: "fifteen", customer: "ACME, INC." },
            { order_date: "1/12/2024", region: "South", sales_rep: "ali green", product: "widgeta", quantity: "2", price: "8.0", customer: "Beta Corp" },
            { order_date: "1/15/2024", region: "west ", sales_rep: " Emily Chan", product: "widgetc", quantity: "seven", price: "20", customer: "Acme, Inc." },
            { order_date: "1/15/2024", region: "west ", sales_rep: " Emily Chan", product: "widgetc", quantity: "seven", price: "20", customer: "Acme, Inc." },
            { order_date: "1/18/2024", region: "North", sales_rep: "Jane Lee", product: "widgetb", quantity: "", price: "15", customer: "Tech Solutions" }
        ]
    },
    {
        step: 2,
        prompt: "Standardize all region and sales rep names to title case (capitalize first letter of each word)",
        description: "Now we standardize the capitalization to make data consistent. This helps with analysis and prevents duplicate categories.",
        changes: "Standardized capitalization for regions and sales reps",
        excel_equivalent: {
            title: "Excel: PROPER Function",
            methods: [
                "Use PROPER() function for title case",
                "Find & Replace with specific patterns",
                "Power Query: Transform → Format → Capitalize Each Word"
            ],
            formulas: [
                "=PROPER(A2)",
                "=PROPER(TRIM(A2))",
                "Helper column: =PROPER(B2), then copy-paste values"
            ],
            manual_steps: "1. Insert helper column next to Region\n2. Use formula =PROPER(B2)\n3. Copy down for all rows\n4. Copy → Paste Special → Values\n5. Delete original column"
        },
        messy_data: [
            { order_date: "1/7/2024", region: "north", sales_rep: "jane lee", product: "widgeta", quantity: "twelve", price: "8", customer: "  Acme, Inc.  " },
            { order_date: "1/10/2024", region: "EAST", sales_rep: "SAM PATEL", product: "widgetb", quantity: "5", price: "fifteen", customer: "ACME, INC." },
            { order_date: "1/12/2024", region: "South", sales_rep: "ali green", product: "widgeta", quantity: "2", price: "8.0", customer: "Beta Corp" },
            { order_date: "1/15/2024", region: "west ", sales_rep: " Emily Chan", product: "widgetc", quantity: "seven", price: "20", customer: "Acme, Inc." },
            { order_date: "1/15/2024", region: "west ", sales_rep: " Emily Chan", product: "widgetc", quantity: "seven", price: "20", customer: "Acme, Inc." },
            { order_date: "1/18/2024", region: "North", sales_rep: "Jane Lee", product: "widgetb", quantity: "", price: "15", customer: "Tech Solutions" }
        ],
        clean_data: [
            { order_date: "1/7/2024", region: "North", sales_rep: "Jane Lee", product: "widgeta", quantity: "twelve", price: "8", customer: "  Acme, Inc.  " },
            { order_date: "1/10/2024", region: "East", sales_rep: "Sam Patel", product: "widgetb", quantity: "5", price: "fifteen", customer: "ACME, INC." },
            { order_date: "1/12/2024", region: "South", sales_rep: "Ali Green", product: "widgeta", quantity: "2", price: "8.0", customer: "Beta Corp" },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "widgetc", quantity: "seven", price: "20", customer: "Acme, Inc." },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "widgetc", quantity: "seven", price: "20", customer: "Acme, Inc." },
            { order_date: "1/18/2024", region: "North", sales_rep: "Jane Lee", product: "widgetb", quantity: "", price: "15", customer: "Tech Solutions" }
        ]
    },
    {
        step: 3,
        prompt: "Convert number words like 'twelve', 'fifteen' to digits in Quantity and Price columns",
        description: "Convert text-based numbers to actual digits and standardize product naming for consistent analysis.",
        changes: "Converted 'twelve'→'12', 'fifteen'→'15', 'seven'→'7' and standardized product names",
        excel_equivalent: {
            title: "Excel: Find & Replace + VALUE Function",
            methods: [
                "Find & Replace for number words to digits",
                "VALUE() function to convert text to numbers",
                "Power Query: Replace Values transformation"
            ],
            formulas: [
                "=VALUE(SUBSTITUTE(SUBSTITUTE(A2,\"twelve\",\"12\"),\"fifteen\",\"15\"))",
                "Multiple nested SUBSTITUTE functions",
                "=IFERROR(VALUE(A2),A2)"
            ],
            manual_steps: "1. Select Quantity column\n2. Ctrl+H (Find & Replace)\n3. Find: 'twelve' Replace: '12'\n4. Find: 'fifteen' Replace: '15'\n5. Repeat for other number words"
        },
        messy_data: [
            { order_date: "1/7/2024", region: "North", sales_rep: "Jane Lee", product: "widgeta", quantity: "twelve", price: "8", customer: "  Acme, Inc.  " },
            { order_date: "1/10/2024", region: "East", sales_rep: "Sam Patel", product: "widgetb", quantity: "5", price: "fifteen", customer: "ACME, INC." },
            { order_date: "1/12/2024", region: "South", sales_rep: "Ali Green", product: "widgeta", quantity: "2", price: "8.0", customer: "Beta Corp" },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "widgetc", quantity: "seven", price: "20", customer: "Acme, Inc." },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "widgetc", quantity: "seven", price: "20", customer: "Acme, Inc." },
            { order_date: "1/18/2024", region: "North", sales_rep: "Jane Lee", product: "widgetb", quantity: "", price: "15", customer: "Tech Solutions" }
        ],
        clean_data: [
            { order_date: "1/7/2024", region: "North", sales_rep: "Jane Lee", product: "Widget A", quantity: "12", price: "8", customer: "  Acme, Inc.  " },
            { order_date: "1/10/2024", region: "East", sales_rep: "Sam Patel", product: "Widget B", quantity: "5", price: "15", customer: "ACME, INC." },
            { order_date: "1/12/2024", region: "South", sales_rep: "Ali Green", product: "Widget A", quantity: "2", price: "8.0", customer: "Beta Corp" },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: "7", price: "20", customer: "Acme, Inc." },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: "7", price: "20", customer: "Acme, Inc." },
            { order_date: "1/18/2024", region: "North", sales_rep: "Jane Lee", product: "Widget B", quantity: "", price: "15", customer: "Tech Solutions" }
        ]
    },
    {
        step: 4,
        prompt: "Remove leading, trailing, and extra spaces from all columns",
        description: "Clean up whitespace issues that can cause problems in analysis and matching.",
        changes: "Removed extra spaces from customer names and other fields",
        excel_equivalent: {
            title: "Excel: TRIM Function",
            methods: [
                "TRIM() function removes extra spaces",
                "Find & Replace for multiple spaces",
                "Power Query: Transform → Trim"
            ],
            formulas: [
                "=TRIM(A2)",
                "=CLEAN(TRIM(A2))",
                "Helper column approach with TRIM"
            ],
            manual_steps: "1. Insert helper column\n2. Use formula =TRIM(A2)\n3. Copy formula down all rows\n4. Copy → Paste Special → Values\n5. Replace original column"
        },
        messy_data: [
            { order_date: "1/7/2024", region: "North", sales_rep: "Jane Lee", product: "Widget A", quantity: "12", price: "8", customer: "  Acme, Inc.  " },
            { order_date: "1/10/2024", region: "East", sales_rep: "Sam Patel", product: "Widget B", quantity: "5", price: "15", customer: "ACME, INC." },
            { order_date: "1/12/2024", region: "South", sales_rep: "Ali Green", product: "Widget A", quantity: "2", price: "8.0", customer: "Beta Corp" },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: "7", price: "20", customer: "Acme, Inc." },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: "7", price: "20", customer: "Acme, Inc." },
            { order_date: "1/18/2024", region: "North", sales_rep: "Jane Lee", product: "Widget B", quantity: "", price: "15", customer: "Tech Solutions" }
        ],
        clean_data: [
            { order_date: "1/7/2024", region: "North", sales_rep: "Jane Lee", product: "Widget A", quantity: "12", price: "8", customer: "Acme, Inc." },
            { order_date: "1/10/2024", region: "East", sales_rep: "Sam Patel", product: "Widget B", quantity: "5", price: "15", customer: "ACME, INC." },
            { order_date: "1/12/2024", region: "South", sales_rep: "Ali Green", product: "Widget A", quantity: "2", price: "8.0", customer: "Beta Corp" },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: "7", price: "20", customer: "Acme, Inc." },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: "7", price: "20", customer: "Acme, Inc." },
            { order_date: "1/18/2024", region: "North", sales_rep: "Jane Lee", product: "Widget B", quantity: "", price: "15", customer: "Tech Solutions" }
        ]
    },
    {
        step: 5,
        prompt: "Convert Quantity and Price columns to numeric values, ensuring all are proper numbers",
        description: "Transform text-based numbers into actual numeric values for mathematical operations and analysis.",
        changes: "Converted text numbers to numeric values (integers and decimals)",
        excel_equivalent: {
            title: "Excel: VALUE Function + Format Cells",
            methods: [
                "VALUE() function converts text to numbers",
                "Format Cells → Number",
                "Text to Columns wizard"
            ],
            formulas: [
                "=VALUE(A2)",
                "=IFERROR(VALUE(A2),0)",
                "=IF(ISNUMBER(A2),A2,VALUE(A2))"
            ],
            manual_steps: "1. Select column with text numbers\n2. Look for green triangle error indicator\n3. Click error icon → Convert to Number\n4. Or use Text to Columns: Data → Text to Columns → Finish"
        },
        messy_data: [
            { order_date: "1/7/2024", region: "North", sales_rep: "Jane Lee", product: "Widget A", quantity: "12", price: "8", customer: "Acme, Inc." },
            { order_date: "1/10/2024", region: "East", sales_rep: "Sam Patel", product: "Widget B", quantity: "5", price: "15", customer: "ACME, INC." },
            { order_date: "1/12/2024", region: "South", sales_rep: "Ali Green", product: "Widget A", quantity: "2", price: "8.0", customer: "Beta Corp" },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: "7", price: "20", customer: "Acme, Inc." },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: "7", price: "20", customer: "Acme, Inc." },
            { order_date: "1/18/2024", region: "North", sales_rep: "Jane Lee", product: "Widget B", quantity: "", price: "15", customer: "Tech Solutions" }
        ],
        clean_data: [
            { order_date: "1/7/2024", region: "North", sales_rep: "Jane Lee", product: "Widget A", quantity: 12, price: 8.0, customer: "Acme, Inc." },
            { order_date: "1/10/2024", region: "East", sales_rep: "Sam Patel", product: "Widget B", quantity: 5, price: 15.0, customer: "ACME, INC." },
            { order_date: "1/12/2024", region: "South", sales_rep: "Ali Green", product: "Widget A", quantity: 2, price: 8.0, customer: "Beta Corp" },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: 7, price: 20.0, customer: "Acme, Inc." },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: 7, price: 20.0, customer: "Acme, Inc." },
            { order_date: "1/18/2024", region: "North", sales_rep: "Jane Lee", product: "Widget B", quantity: null, price: 15.0, customer: "Tech Solutions" }
        ]
    },
    {
        step: 6,
        prompt: "Fill missing values using median for numbers, 'Unknown' for text",
        description: "Handle missing data by using statistical methods for numbers and placeholder values for text.",
        changes: "Filled missing quantity with median value (7)",
        excel_equivalent: {
            title: "Excel: IF + MEDIAN Functions",
            methods: [
                "IF function to check for blanks",
                "MEDIAN function for missing numbers",
                "Find & Replace blanks with values"
            ],
            formulas: [
                "=IF(A2=\"\",MEDIAN($A$2:$A$100),A2)",
                "=IF(ISBLANK(A2),\"Unknown\",A2)",
                "=IF(A2=\"\",MEDIAN(A:A),A2)"
            ],
            manual_steps: "1. Calculate median: =MEDIAN(E2:E100)\n2. Select column with blanks\n3. Ctrl+H → Find: (leave blank) Replace: [median value]\n4. Or use IF formula in helper column"
        },
        messy_data: [
            { order_date: "1/7/2024", region: "North", sales_rep: "Jane Lee", product: "Widget A", quantity: 12, price: 8.0, customer: "Acme, Inc." },
            { order_date: "1/10/2024", region: "East", sales_rep: "Sam Patel", product: "Widget B", quantity: 5, price: 15.0, customer: "ACME, INC." },
            { order_date: "1/12/2024", region: "South", sales_rep: "Ali Green", product: "Widget A", quantity: 2, price: 8.0, customer: "Beta Corp" },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: 7, price: 20.0, customer: "Acme, Inc." },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: 7, price: 20.0, customer: "Acme, Inc." },
            { order_date: "1/18/2024", region: "North", sales_rep: "Jane Lee", product: "Widget B", quantity: null, price: 15.0, customer: "Tech Solutions" }
        ],
        clean_data: [
            { order_date: "1/7/2024", region: "North", sales_rep: "Jane Lee", product: "Widget A", quantity: 12, price: 8.0, customer: "Acme, Inc." },
            { order_date: "1/10/2024", region: "East", sales_rep: "Sam Patel", product: "Widget B", quantity: 5, price: 15.0, customer: "ACME, INC." },
            { order_date: "1/12/2024", region: "South", sales_rep: "Ali Green", product: "Widget A", quantity: 2, price: 8.0, customer: "Beta Corp" },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: 7, price: 20.0, customer: "Acme, Inc." },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: 7, price: 20.0, customer: "Acme, Inc." },
            { order_date: "1/18/2024", region: "North", sales_rep: "Jane Lee", product: "Widget B", quantity: 7, price: 15.0, customer: "Tech Solutions" }
        ]
    },
    {
        step: 7,
        prompt: "Remove duplicate rows, keeping only the first occurrence",
        description: "Eliminate duplicate entries to ensure data integrity and accurate analysis results.",
        changes: "Removed 1 duplicate row",
        excel_equivalent: {
            title: "Excel: Remove Duplicates Tool",
            methods: [
                "Data → Remove Duplicates",
                "Advanced Filter with Unique records only",
                "Power Query: Remove Duplicates"
            ],
            formulas: [
                "No formula needed - use built-in tool",
                "COUNTIFS() to identify duplicates before removing",
                "=COUNTIFS($A$2:$A$100,A2,$B$2:$B$100,B2)>1"
            ],
            manual_steps: "1. Select entire data range\n2. Go to Data tab → Remove Duplicates\n3. Check columns to compare for duplicates\n4. Click OK\n5. Excel keeps first occurrence, removes others"
        },
        messy_data: [
            { order_date: "1/7/2024", region: "North", sales_rep: "Jane Lee", product: "Widget A", quantity: 12, price: 8.0, customer: "Acme, Inc." },
            { order_date: "1/10/2024", region: "East", sales_rep: "Sam Patel", product: "Widget B", quantity: 5, price: 15.0, customer: "ACME, INC." },
            { order_date: "1/12/2024", region: "South", sales_rep: "Ali Green", product: "Widget A", quantity: 2, price: 8.0, customer: "Beta Corp" },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: 7, price: 20.0, customer: "Acme, Inc." },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: 7, price: 20.0, customer: "Acme, Inc." },
            { order_date: "1/18/2024", region: "North", sales_rep: "Jane Lee", product: "Widget B", quantity: 7, price: 15.0, customer: "Tech Solutions" }
        ],
        clean_data: [
            { order_date: "1/7/2024", region: "North", sales_rep: "Jane Lee", product: "Widget A", quantity: 12, price: 8.0, customer: "Acme, Inc." },
            { order_date: "1/10/2024", region: "East", sales_rep: "Sam Patel", product: "Widget B", quantity: 5, price: 15.0, customer: "ACME, INC." },
            { order_date: "1/12/2024", region: "South", sales_rep: "Ali Green", product: "Widget A", quantity: 2, price: 8.0, customer: "Beta Corp" },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: 7, price: 20.0, customer: "Acme, Inc." },
            { order_date: "1/18/2024", region: "North", sales_rep: "Jane Lee", product: "Widget B", quantity: 7, price: 15.0, customer: "Tech Solutions" }
        ]
    },
    {
        step: 8,
        prompt: "What were the sales by region? Summarize and show on a Bar chart",
        description: "Now that our data is clean, let's create a meaningful visualization to analyze sales performance by region. This demonstrates the ultimate goal of data cleaning - turning messy data into actionable business insights.",
        changes: "Created bar chart visualization showing North leads with $201 in sales, followed by West ($140), East ($75), and South ($16)",
        excel_equivalent: {
            title: "Excel: PivotTable + Chart",
            methods: [
                "Create PivotTable from cleaned data",
                "Insert Chart from PivotTable",
                "Format chart for professional presentation"
            ],
            formulas: [
                "PivotTable: Region to Rows, Sales (Quantity × Price) to Values (Sum)",
                "Insert → Charts → Column/Bar Chart",
                "Chart Tools → Design → Chart Styles"
            ],
            manual_steps: "1. Select cleaned data range\n2. Insert → PivotTable\n3. Drag Region to Rows area\n4. Create calculated field: Sales = Quantity * Price\n5. Drag Sales to Values area, set to Sum\n6. Select PivotTable → Insert → Charts → Bar Chart\n7. Format chart title, axis labels, and colors"
        },
        input_data: [
            { order_date: "1/7/2024", region: "North", sales_rep: "Jane Lee", product: "Widget A", quantity: 12, price: 8.0, customer: "Acme, Inc." },
            { order_date: "1/10/2024", region: "East", sales_rep: "Sam Patel", product: "Widget B", quantity: 5, price: 15.0, customer: "ACME, INC." },
            { order_date: "1/12/2024", region: "South", sales_rep: "Ali Green", product: "Widget A", quantity: 2, price: 8.0, customer: "Beta Corp" },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: 7, price: 20.0, customer: "Acme, Inc." },
            { order_date: "1/18/2024", region: "North", sales_rep: "Jane Lee", product: "Widget B", quantity: 7, price: 15.0, customer: "Tech Solutions" }
        ],
        summary_data: [
            { region: "North", total_sales: 201.0 },
            { region: "East", total_sales: 75.0 },
            { region: "South", total_sales: 16.0 },
            { region: "West", total_sales: 140.0 }
        ],
        messy_data: [
            { order_date: "1/7/2024", region: "North", sales_rep: "Jane Lee", product: "Widget A", quantity: 12, price: 8.0, customer: "Acme, Inc." },
            { order_date: "1/10/2024", region: "East", sales_rep: "Sam Patel", product: "Widget B", quantity: 5, price: 15.0, customer: "ACME, INC." },
            { order_date: "1/12/2024", region: "South", sales_rep: "Ali Green", product: "Widget A", quantity: 2, price: 8.0, customer: "Beta Corp" },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: 7, price: 20.0, customer: "Acme, Inc." },
            { order_date: "1/18/2024", region: "North", sales_rep: "Jane Lee", product: "Widget B", quantity: 7, price: 15.0, customer: "Tech Solutions" }
        ],
        clean_data: [
            { order_date: "1/7/2024", region: "North", sales_rep: "Jane Lee", product: "Widget A", quantity: 12, price: 8.0, customer: "Acme, Inc." },
            { order_date: "1/10/2024", region: "East", sales_rep: "Sam Patel", product: "Widget B", quantity: 5, price: 15.0, customer: "ACME, INC." },
            { order_date: "1/12/2024", region: "South", sales_rep: "Ali Green", product: "Widget A", quantity: 2, price: 8.0, customer: "Beta Corp" },
            { order_date: "1/15/2024", region: "West", sales_rep: "Emily Chan", product: "Widget C", quantity: 7, price: 20.0, customer: "Acme, Inc." },
            { order_date: "1/18/2024", region: "North", sales_rep: "Jane Lee", product: "Widget B", quantity: 7, price: 15.0, customer: "Tech Solutions" }
        ]
    }
];

const messyData = [
    {
        order_date: "1/7/2024",
        region: "north",
        sales_rep: "jane lee",
        product: "widgeta",
        quantity: "twelve",
        price: "8",
        customer: "  Acme, Inc.  "
    },
    {
        order_date: "1/10/2024",
        region: "EAST",
        sales_rep: "SAM PATEL",
        product: "widgetb",
        quantity: "5",
        price: "fifteen",
        customer: "ACME, INC."
    },
    {
        order_date: "",
        region: "",
        sales_rep: "",
        product: "",
        quantity: "",
        price: "",
        customer: ""
    },
    {
        order_date: "1/12/2024",
        region: "South",
        sales_rep: "ali green",
        product: "widgeta",
        quantity: "2",
        price: "8.0",
        customer: "Beta Corp"
    },
    {
        order_date: "1/15/2024",
        region: "west ",
        sales_rep: " Emily Chan",
        product: "widgetc",
        quantity: "seven",
        price: "20",
        customer: "Acme, Inc."
    },
    {
        order_date: "1/15/2024",
        region: "west ",
        sales_rep: " Emily Chan",
        product: "widgetc",
        quantity: "seven",
        price: "20",
        customer: "Acme, Inc."
    },
    {
        order_date: "1/18/2024",
        region: "North",
        sales_rep: "Jane Lee",
        product: "widgetb",
        quantity: "",
        price: "15",
        customer: "Tech Solutions"
    }
];

const cleanData = [
    {
        order_date: "1/7/2024",
        region: "North",
        sales_rep: "Jane Lee",
        product: "Widgeta",
        quantity: 12,
        price: 8.0,
        customer: "Acme, Inc."
    },
    {
        order_date: "1/10/2024",
        region: "East",
        sales_rep: "Sam Patel",
        product: "Widgetb",
        quantity: 5,
        price: 15.0,
        customer: "ACME, INC."
    },
    {
        order_date: "1/12/2024",
        region: "South",
        sales_rep: "Ali Green",
        product: "Widgeta",
        quantity: 2,
        price: 8.0,
        customer: "Beta Corp"
    },
    {
        order_date: "1/15/2024",
        region: "West",
        sales_rep: "Emily Chan",
        product: "Widgetc",
        quantity: 7,
        price: 20.0,
        customer: "Acme, Inc."
    },
    {
        order_date: "1/18/2024",
        region: "North",
        sales_rep: "Jane Lee",
        product: "Widgetb",
        quantity: 5,
        price: 15.0,
        customer: "Tech Solutions"
    }
];

const excelFormulas = [
    {
        formula: "=PROPER(A2)",
        purpose: "Standardize case",
        ai_prompt: "Convert all text to proper case (first letter capitalized)"
    },
    {
        formula: "=TRIM(A2)",
        purpose: "Remove extra spaces",
        ai_prompt: "Remove leading and trailing spaces from text"
    },
    {
        formula: "=IFERROR(VALUE(A2), \"\")",
        purpose: "Convert text to numbers",
        ai_prompt: "Convert text values to numbers, leave blank if not possible"
    },
    {
        formula: "Find &amp; Replace",
        purpose: "Convert number words (e.g., eight → 8)",
        ai_prompt: "Replace written numbers with numeric values (e.g., 'twelve' → 12)"
    },
    {
        formula: "=IF(A2=\"\", \"Unknown\", A2)",
        purpose: "Fill blanks",
        ai_prompt: "Fill empty cells with appropriate default values"
    },
    {
        formula: "Data → Remove Duplicates",
        purpose: "Remove duplicates",
        ai_prompt: "Remove duplicate rows from the dataset"
    },
    {
        formula: "Power Query",
        purpose: "Advanced cleaning",
        ai_prompt: "Perform comprehensive data cleaning and transformation"
    }
];

const keyMessages = [
    "Excel habits = AI readiness",
    "Describe tasks in plain language",
    "Next time: Ask 'Can I explain this to AI?'",
    "Your Excel know-how is your AI launchpad"
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupExcelConcepts();
    setupMappingCards();
    setupDataDemo();
    setupFormulaCards();
    setupKeyMessages();
    setupIntersectionObserver();
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function setupExcelConcepts() {
    const conceptCards = document.querySelectorAll('.concept-card.clickable');
    
    conceptCards.forEach(card => {
        card.addEventListener('click', function() {
            const isExpanded = this.classList.contains('expanded');
            
            // Close all other cards
            conceptCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.classList.remove('expanded');
                }
            });
            
            // Toggle this card
            this.classList.toggle('expanded', !isExpanded);
        });
    });
}

function setupMappingCards() {
    const mappingGrid = document.getElementById('mapping-grid');
    
    excelAIMappings.forEach(mapping => {
        const card = document.createElement('div');
        card.className = 'mapping-card';
        
        card.innerHTML = `
            <div class="excel-side">
                <div class="mapping-label">Excel Tool</div>
                <div class="mapping-content">${mapping.excel_tool}</div>
            </div>
            <div class="ai-side">
                <div class="mapping-label">AI Equivalent</div>
                <div class="mapping-content">${mapping.ai_equivalent}</div>
            </div>
        `;
        
        mappingGrid.appendChild(card);
    });
}

function setupDataDemo() {
    let currentStep = 0;
    let stepsCompleted = [];
    
    // Create steps HTML
    const stepsContainer = document.getElementById('cleaning-steps');
    
    // Debug: Check if container exists and steps data is valid
    console.log('Steps container found:', !!stepsContainer);
    console.log('Number of cleaning steps:', cleaningSteps.length);
    
    if (!stepsContainer) {
        console.error('cleaning-steps container not found!');
        return;
    }
    
    // Clear any existing content
    stepsContainer.innerHTML = '';
    
    cleaningSteps.forEach((stepData, index) => {
        console.log(`Creating step ${stepData.step}:`, stepData);
        const stepElement = createStepElement(stepData, index);
        stepsContainer.appendChild(stepElement);
    });
    
    console.log('All steps created. Container children:', stepsContainer.children.length);
    
    // Set initial state
    updateProgressIndicator(1);
    updateStepVisibility(0);
    
    // Setup control buttons
    const runAllButton = document.getElementById('run-all-steps');
    const resetButton = document.getElementById('reset-demo');
    
    runAllButton.addEventListener('click', () => {
        runAllSteps();
    });
    
    resetButton.addEventListener('click', () => {
        resetDemo();
    });
    
    function createStepElement(stepData, index) {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'cleaning-step';
        stepDiv.id = `step-${stepData.step}`;
        
        // Special handling for Step 8 (visualization)
        if (stepData.step === 8) {
            stepDiv.innerHTML = `
                <div class="step-header">
                    <div class="step-number">${stepData.step}</div>
                    <h3 class="step-title">Step ${stepData.step}: ${getStepTitle(stepData.step)}</h3>
                </div>
                <div class="step-description">${stepData.description}</div>
                
                <div class="approach-comparison">
                    <div class="same-result-badge">Same Result! ✓</div>
                    
                    <div class="ai-approach">
                        <div class="approach-header">
                            <div class="approach-icon">🤖</div>
                            <h4 class="approach-title">AI APPROACH</h4>
                        </div>
                        <div class="approach-content">
                            <div class="ai-prompt-box">
                                <strong>Prompt:</strong> "${stepData.prompt}"
                            </div>
                        </div>
                        <div class="connection-arrow">↔</div>
                    </div>
                    
                    <div class="excel-approach">
                        <div class="approach-header">
                            <div class="approach-icon">📊</div>
                            <h4 class="approach-title">${stepData.excel_equivalent.title}</h4>
                        </div>
                        <div class="approach-content">
                            <div class="excel-methods">
                                <h5>Methods:</h5>
                                <ul>
                                    ${stepData.excel_equivalent.methods.map(method => '<li>' + method + '</li>').join('')}
                                </ul>
                            </div>
                            
                            <div class="excel-formulas">
                                <h5>Formulas:</h5>
                                <ul>
                                    ${stepData.excel_equivalent.formulas.map(formula => '<li>' + formula + '</li>').join('')}
                                </ul>
                            </div>
                            
                            <div class="excel-steps">
                                <h5>Manual Steps:</h5>
                                <div class="excel-steps">${stepData.excel_equivalent.manual_steps}</div>
                            </div>
                        </div>
                        <div class="connection-arrow">↔</div>
                    </div>
                </div>
                
                <div class="step-data">
                    <div class="data-before">
                        <h5>Input: Cleaned Data (${stepData.input_data ? stepData.input_data.length : 5} rows)</h5>
                        <table class="step-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Region</th>
                                    <th>Rep</th>
                                    <th>Product</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Customer</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${stepData.input_data ? generateTableRows(stepData.input_data, stepData, 'input') : generateTableRows(stepData.clean_data, stepData, 'input')}
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="data-after">
                        <h5>Output: Sales Visualization</h5>
                        <div class="chart-container">
                            <div class="chart-placeholder">Click "Create Visualization" to generate the chart</div>
                            <canvas id="salesChart-${stepData.step}" width="400" height="300" style="display: none;"></canvas>
                        </div>
                    </div>
                </div>
                
                <div class="step-button-container">
                    <button class="btn btn--primary step-clean-btn" onclick="runStep(${stepData.step})">Create Visualization</button>
                </div>
                
                <div class="step-changes" style="display: none;">
                    <h5>Changes Made:</h5>
                    <p>${stepData.changes}</p>
                </div>
            `;
        } else {
            stepDiv.innerHTML = `
            <div class="step-header">
                <div class="step-number">${stepData.step}</div>
                <h3 class="step-title">Step ${stepData.step}: ${getStepTitle(stepData.step)}</h3>
            </div>
            <div class="step-description">${stepData.description}</div>
            
            <div class="approach-comparison">
                <div class="same-result-badge">Same Result! ✓</div>
                
                <div class="ai-approach">
                    <div class="approach-header">
                        <div class="approach-icon">🤖</div>
                        <h4 class="approach-title">AI APPROACH</h4>
                    </div>
                    <div class="approach-content">
                        <div class="ai-prompt-box">
                            <strong>Prompt:</strong> "${stepData.prompt}"
                        </div>
                    </div>
                    <div class="connection-arrow">↔</div>
                </div>
                
                <div class="excel-approach">
                    <div class="approach-header">
                        <div class="approach-icon">📊</div>
                        <h4 class="approach-title">${stepData.excel_equivalent.title}</h4>
                    </div>
                    <div class="approach-content">
                        <div class="excel-methods">
                            <h5>Methods:</h5>
                            <ul>
                                ${stepData.excel_equivalent.methods.map(method => `<li>${method}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="excel-formulas">
                            <h5>Formulas:</h5>
                            <ul>
                                ${stepData.excel_equivalent.formulas.map(formula => `<li>${formula}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="excel-steps">
                            <h5>Manual Steps:</h5>
                            <div class="excel-steps">${stepData.excel_equivalent.manual_steps}</div>
                        </div>
                    </div>
                    <div class="connection-arrow">↔</div>
                </div>
            </div>
            
            <div class="step-data">
                <div class="data-before">
                    <h5>Before Data (${stepData.messy_data.length} rows)</h5>
                    <table class="step-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Region</th>
                                <th>Rep</th>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Customer</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${generateTableRows(stepData.messy_data, stepData, 'before')}
                        </tbody>
                    </table>
                </div>
                
                <div class="data-after">
                    <h5>After Data (${stepData.clean_data.length} rows)</h5>
                    <table class="step-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Region</th>
                                <th>Rep</th>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Customer</th>
                            </tr>
                        </thead>
                        <tbody class="after-tbody">
                            <!-- Will be populated when step runs -->
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="step-button-container">
                <button class="btn btn--primary step-clean-btn" onclick="runStep(${stepData.step})">Clean This Step</button>
            </div>
            
            <div class="step-changes" style="display: none;">
                <h5>Changes Made:</h5>
                <p>${stepData.changes}</p>
            </div>
        `;
        
        }
        
        return stepDiv;
    }
    
    function generateTableRows(data, stepData, type) {
        return data.map((row, rowIndex) => {
            const cells = [
                row.order_date || '',
                row.region || '',
                row.sales_rep || '',
                row.product || '',
                row.quantity !== null ? row.quantity : '',
                row.price !== null ? row.price : '',
                row.customer || ''
            ];
            
            return `<tr>${cells.map(cell => `<td>${cell}</td>`).join('')}</tr>`;
        }).join('');
    }
    
    function updateProgressIndicator(activeStep) {
        const steps = document.querySelectorAll('.progress-steps .step');
        const progressFill = document.querySelector('.progress-fill');
        
        steps.forEach((step, index) => {
            step.classList.remove('active', 'completed');
            if (index + 1 < activeStep) {
                step.classList.add('completed');
            } else if (index + 1 === activeStep) {
                step.classList.add('active');
            }
        });
        
        const progressPercent = ((activeStep - 1) / 8) * 100;
        progressFill.style.width = `${Math.max(12.5, progressPercent)}%`;
    }
    
    function updateStepVisibility(activeStepIndex) {
        const steps = document.querySelectorAll('.cleaning-step');
        
        steps.forEach((step, index) => {
            step.classList.remove('active', 'completed');
            if (index < activeStepIndex) {
                step.classList.add('completed');
            } else if (index === activeStepIndex) {
                step.classList.add('active');
            }
        });
    }
    
    window.runStep = function(stepNumber) {
        const stepElement = document.getElementById('step-' + stepNumber);
        const button = stepElement.querySelector('.step-clean-btn');
        const changesDiv = stepElement.querySelector('.step-changes');
        
        // Update button state
        button.textContent = 'Processing...';
        button.disabled = true;
        
        setTimeout(() => {
            const stepData = cleaningSteps[stepNumber - 1];
            
            // For Step 8, handle visualization differently
            if (stepNumber === 8) {
                // Show changes
                changesDiv.style.display = 'block';
                
                // Update button
                button.textContent = 'Visualization Created ✓';
                button.style.background = '#10b981';
                
                // Create visualization immediately
                createVisualization(stepElement);
            } else {
                // Handle regular steps
                const afterTbody = stepElement.querySelector('.after-tbody');
                afterTbody.innerHTML = generateTableRows(stepData.clean_data, stepData, 'after');
                
                // Show changes
                changesDiv.style.display = 'block';
                
                // Update button
                button.textContent = 'Completed ✓';
                button.style.background = '#10b981';
            }
            
            // Mark step as completed
            stepsCompleted.push(stepNumber);
            stepElement.classList.add('completed');
            
            // Update progress
            const nextStep = stepNumber < 8 ? stepNumber + 1 : 8;
            updateProgressIndicator(nextStep);
            
            // Activate next step
            if (stepNumber < 8) {
                updateStepVisibility(stepNumber);
            }
        }, 1500);
    };
    
    function runAllSteps() {
        cleaningSteps.forEach((_, index) => {
            setTimeout(() => {
                if (!stepsCompleted.includes(index + 1)) {
                    window.runStep(index + 1);
                }
            }, index * 500);
        });
    }
    
    function resetDemo() {
        stepsCompleted = [];
        currentStep = 0;
        
        // Reset progress indicator
        updateProgressIndicator(1);
        updateStepVisibility(0);
        
        // Reset all steps
        const steps = document.querySelectorAll('.cleaning-step');
        steps.forEach((step, index) => {
            const button = step.querySelector('.step-clean-btn');
            const afterTbody = step.querySelector('.after-tbody');
            const changesDiv = step.querySelector('.step-changes');
            
            button.textContent = 'Clean This Step';
            button.disabled = false;
            button.style.background = '';
            afterTbody.innerHTML = '';
            changesDiv.style.display = 'none';
            step.classList.remove('completed');
        });
    }
}

function populateDataTable(tbodyId, data, showIssues) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    data.forEach((row, index) => {
        const tr = document.createElement('tr');
        
        // Check for empty row
        const isEmpty = Object.values(row).every(val => val === '' || val === null || val === undefined);
        // Check for duplicate (simplified - just check if it's the same as previous row)
        const isDuplicate = index > 0 && JSON.stringify(row) === JSON.stringify(data[index - 1]);
        
        if (showIssues) {
            if (isEmpty) tr.classList.add('empty-row');
            if (isDuplicate) tr.classList.add('duplicate-row');
        }
        
        tr.innerHTML = `
            <td>${row.order_date || ''}</td>
            <td>${row.region || ''}</td>
            <td>${row.sales_rep || ''}</td>
            <td>${row.product || ''}</td>
            <td>${row.quantity !== null ? row.quantity : ''}</td>
            <td>${row.price !== null ? row.price : ''}</td>
            <td>${row.customer || ''}</td>
        `;
        
        tbody.appendChild(tr);
    });
}

function updateDataStats(prefix, data) {
    const rowsSpan = document.getElementById(`${prefix}-rows`);
    const emptySpan = document.getElementById(`${prefix}-empty`);
    const dupesSpan = document.getElementById(`${prefix}-dupes`);
    
    const totalRows = data.length;
    const emptyRows = data.filter(row => 
        Object.values(row).every(val => val === '' || val === null || val === undefined)
    ).length;
    
    // Count empty cells
    let emptyCells = 0;
    data.forEach(row => {
        Object.values(row).forEach(val => {
            if (val === '' || val === null || val === undefined) emptyCells++;
        });
    });
    
    // Count duplicates (simplified)
    let duplicates = 0;
    for (let i = 1; i < data.length; i++) {
        if (JSON.stringify(data[i]) === JSON.stringify(data[i - 1])) {
            duplicates++;
        }
    }
    
    rowsSpan.textContent = totalRows;
    emptySpan.textContent = emptyCells;
    dupesSpan.textContent = duplicates;
}

function setupFormulaCards() {
    const formulaGrid = document.getElementById('formula-grid');
    
    excelFormulas.forEach(formula => {
        const card = document.createElement('div');
        card.className = 'formula-card';
        
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <h3 class="card-title">Excel Formula</h3>
                    <div class="card-content">
                        <strong>${formula.formula}</strong>
                        <br><br>
                        <em>${formula.purpose}</em>
                    </div>
                </div>
                <div class="card-back">
                    <h3 class="card-title">AI Prompt</h3>
                    <div class="card-content">
                        "${formula.ai_prompt}"
                    </div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
        
        formulaGrid.appendChild(card);
    });
}

function setupKeyMessages() {
    const messagesContainer = document.getElementById('key-messages');
    
    keyMessages.forEach((message, index) => {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'key-message';
        messageDiv.textContent = message;
        messagesContainer.appendChild(messageDiv);
        
        // Reveal messages progressively when section comes into view
        setTimeout(() => {
            messageDiv.classList.add('revealed');
        }, index * 300);
    });
}

function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Special handling for key messages section
                if (entry.target.id === 'takeaways') {
                    const messages = entry.target.querySelectorAll('.key-message');
                    messages.forEach((message, index) => {
                        setTimeout(() => {
                            message.classList.add('revealed');
                        }, index * 200);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

function getStepTitle(stepNumber) {
    const titles = {
        1: "Remove Blank Rows",
        2: "Standardize Capitalization",
        3: "Convert Number Words",
        4: "Remove Extra Spaces",
        5: "Convert to Numeric",
        6: "Fill Missing Values",
        7: "Remove Duplicates",
        8: "Visualize Sales by Region"
    };
    return titles[stepNumber] || "Data Cleaning";
}

function createVisualization(stepElement) {
    const canvas = stepElement.querySelector('canvas');
    const placeholder = stepElement.querySelector('.chart-placeholder');
    const stepData = cleaningSteps[7]; // Step 8 (index 7)
    
    if (!canvas || !stepData.summary_data) {
        console.error('Canvas or summary data not found for visualization');
        return;
    }
    
    // Hide placeholder and show canvas
    if (placeholder) placeholder.style.display = 'none';
    canvas.style.display = 'block';
    
    const ctx = canvas.getContext('2d');
    
    // Create chart
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: stepData.summary_data.map(function(item) { return item.region; }),
            datasets: [{
                label: 'Total Sales ($)',
                data: stepData.summary_data.map(function(item) { return item.total_sales; }),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F'],
                borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Sales by Region',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Sales Amount ($)'
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value;
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Region'
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeInOutQuart'
            }
        }
    });
    
    // Add visual effect to chart container
    const chartContainer = stepElement.querySelector('.chart-container');
    if (chartContainer) {
        chartContainer.classList.add('visible');
    }
    
    console.log('Chart created successfully');
}

// Utility functions
window.scrollToSection = scrollToSection;