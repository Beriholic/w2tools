package xyz.beriholic.w2tools.ui.component

import androidx.compose.foundation.layout.size
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.material3.TextFieldDefaults
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.Dp

@Composable
fun TextInput(
    modifier: Modifier = Modifier,
    value: String,
    onValueChange: (String) -> Unit,
    size: Pair<Dp, Dp>? = null,
    readOnly: Boolean = false,
    placeholder: String = "",
    maxLine: Int = Int.MAX_VALUE

) {
    TextField(
        modifier = if (size != null) modifier.size(size.first, size.second) else modifier,
        value = value,
        onValueChange = onValueChange,
        shape = MaterialTheme.shapes.medium,
        colors = TextFieldDefaults.colors(
            focusedIndicatorColor = Color.Transparent,
            unfocusedIndicatorColor = Color.Transparent
        ),
        maxLines = maxLine,
        readOnly = readOnly,
        placeholder = { Text(placeholder) }
    )
}