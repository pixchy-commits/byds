import os
from codebase_to_text import CodebaseToText

code_to_text = CodebaseToText(
    input_path='byds/',
    output_path="codebase.txt",
    output_type="txt",
    verbose=True,
    exclude_hidden=True
)

code_to_text.get_file()
