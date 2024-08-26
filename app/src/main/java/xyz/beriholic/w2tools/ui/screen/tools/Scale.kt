package xyz.beriholic.w2tools.ui.screen.tools

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.ContentCopy
import androidx.compose.material3.ElevatedFilterChip
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalClipboardManager
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.unit.dp
import com.ramcosta.composedestinations.annotation.Destination
import com.ramcosta.composedestinations.navigation.DestinationsNavigator
import xyz.beriholic.w2tools.ui.component.TextInput

@OptIn(ExperimentalMaterial3Api::class)
@Composable
@Destination
fun Scale(
    navigator: DestinationsNavigator
) {
    var scaleType by remember { mutableStateOf(ScaleType.DECIMAL) }
    var input by remember { mutableStateOf("") }
    var resultBinary by remember { mutableStateOf("") }
    var resultOctal by remember { mutableStateOf("") }
    var resultDecimal by remember { mutableStateOf("") }
    var resultHex by remember { mutableStateOf("") }
    val err = "出错了"

    val onInputChange: (String) -> Unit = {
        input = it
        when (scaleType) {
            ScaleType.BINARY -> {
                resultBinary = input
                resultOctal = input.toIntOrNull(2)?.toString(8) ?: err
                resultDecimal = input.toIntOrNull(2)?.toString(10) ?: err
                resultHex = input.toIntOrNull(2)?.toString(16) ?: err
            }

            ScaleType.OCTAL -> {
                resultBinary = input.toIntOrNull(8)?.toString(2) ?: err
                resultOctal = input
                resultDecimal = input.toIntOrNull(8)?.toString(10) ?: err
                resultHex = input.toIntOrNull(8)?.toString(16) ?: err
            }

            ScaleType.DECIMAL -> {
                resultBinary = input.toIntOrNull(10)?.toString(2) ?: err
                resultOctal = input.toIntOrNull(10)?.toString(8) ?: err
                resultDecimal = input
                resultHex = input.toIntOrNull(10)?.toString(16) ?: err
            }

            ScaleType.HEX -> {
                resultBinary = input.toIntOrNull(16)?.toString(2) ?: err
                resultOctal = input.toIntOrNull(16)?.toString(8) ?: err
                resultDecimal = input.toIntOrNull(16)?.toString(10) ?: err
                resultHex = input
            }
        }
    }



    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text(text = "进制转换")
                },
                navigationIcon = {
                    IconButton(
                        onClick = { navigator.popBackStack() },
                        content = {
                            Icon(
                                imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                                contentDescription = "Back"
                            )
                        }
                    )
                }
            )
        }
    ) { inPadding ->
        Box(modifier = Modifier.padding(inPadding)) {
            val scrollState = rememberScrollState()
            val cm = LocalClipboardManager.current
            Column(
                modifier = Modifier.verticalScroll(scrollState)
            ) {
                Row(
                    modifier = Modifier
                        .padding(8.dp)
                        .fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceEvenly
                ) {
                    ElevatedFilterChip(
                        selected = scaleType == ScaleType.BINARY,
                        onClick = {
                            scaleType = ScaleType.BINARY
                        },
                        label = {
                            Text("二进制")
                        }
                    )

                    ElevatedFilterChip(
                        selected = scaleType == ScaleType.OCTAL,
                        onClick = {
                            scaleType = ScaleType.OCTAL
                        },
                        label = {
                            Text("八进制")
                        }
                    )

                    ElevatedFilterChip(
                        selected = scaleType == ScaleType.DECIMAL,
                        onClick = {
                            scaleType = ScaleType.DECIMAL
                        },
                        label = {
                            Text("十进制")
                        }
                    )

                    ElevatedFilterChip(
                        selected = scaleType == ScaleType.HEX,
                        onClick = {
                            scaleType = ScaleType.HEX
                        },
                        label = {
                            Text("十六进制")
                        }
                    )
                }

                TextInput(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(8.dp),
                    value = input,
                    onValueChange = { onInputChange(it) },
                    placeholder = "转换一点数字吧",
                )

                Spacer(modifier = Modifier.height(8.dp))

                ScaleItem(title = "二进制", value = resultBinary) {
                    cm.setText(AnnotatedString(resultBinary))
                }

                ScaleItem(title = "八进制", value = resultOctal) {
                    cm.setText(AnnotatedString(resultOctal))
                }

                ScaleItem(title = "十进制", value = resultDecimal) {
                    cm.setText(AnnotatedString(resultDecimal))
                }

                ScaleItem(title = "十六进制", value = resultHex) {
                    cm.setText(AnnotatedString(resultHex))
                }
            }
        }
    }
}

@Composable
private fun ScaleItem(
    title: String,
    value: String,
    copy: () -> Unit
) {
    Text(
        text = title,
        fontSize = MaterialTheme.typography.titleMedium.fontSize
    )
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        TextInput(
            modifier = Modifier
                .fillMaxWidth()
                .weight(1f),
            value = value,
            onValueChange = {},
            readOnly = true,
            maxLine = 1
        )
        IconButton(
            modifier = Modifier.weight(0.2f),
            onClick = { copy() }
        ) {
            Icon(Icons.Filled.ContentCopy, contentDescription = null)
        }
    }

}

private enum class ScaleType {
    BINARY, OCTAL, DECIMAL, HEX
}