package xyz.beriholic.w2tools.ui.screen.tools

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
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
fun RgbHex(
    navigator: DestinationsNavigator
) {
    var input by remember { mutableStateOf("") }
    var result by remember { mutableStateOf("") }

    val encode = {
        result = if (isHex(input)) {
            hexToRgb(input)
        } else {
            rgbToHex(input)
        }
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text(text = "RGB/HEX转换") },
                navigationIcon = {
                    IconButton(
                        onClick = { navigator.popBackStack() },
                        content = {
                            Icon(
                                imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                                contentDescription = null,
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
                modifier = Modifier.verticalScroll(scrollState),
            ) {
                TextInput(
                    modifier = Modifier.padding(8.dp),
                    value = input,
                    onValueChange = { input = it },
                    size = Pair(400.dp, 250.dp),
                    placeholder = "编码些什么吧"
                )

                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(8.dp),
                    horizontalArrangement = Arrangement.SpaceAround
                ) {
                    Button(onClick = {
                        encode()
                    }) {
                        Text(text = "转换")
                    }
                    Button(onClick = {
                        cm.setText(AnnotatedString(result))
                    }) {
                        Text(text = "复制")
                    }
                    Button(onClick = {
                        input = ""
                        result = ""
                    }) {
                        Text(text = "清空")
                    }
                }

                TextInput(
                    modifier = Modifier.padding(8.dp),
                    value = result,
                    onValueChange = {},
                    size = Pair(400.dp, 250.dp),
                    readOnly = true
                )
            }
        }
    }
}

private fun isHex(input: String): Boolean {
    return input.startsWith("#") && (input.length == 7 || input.length == 9)
}

private fun rgbToHex(rgb: String): String {
    val rgbValues = rgb.split(",").map { it.trim().toIntOrNull() }
    return if (rgbValues.size == 3 && rgbValues.all { it != null && it in 0..255 }) {
        val (r, g, b) = rgbValues
        String.format("#%02X%02X%02X", r, g, b)
    } else {
        "Invalid RGB input"
    }
}

private fun hexToRgb(hex: String): String {
    return if (hex.startsWith("#") && (hex.length == 7 || hex.length == 9)) {
        val r = hex.substring(1, 3).toInt(16)
        val g = hex.substring(3, 5).toInt(16)
        val b = hex.substring(5, 7).toInt(16)
        "$r, $g, $b"
    } else {
        "Invalid HEX input"
    }
}


