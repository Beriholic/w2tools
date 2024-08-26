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
import androidx.compose.material3.ElevatedFilterChip
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
fun Base64(
    navigator: DestinationsNavigator
) {
    var input by remember { mutableStateOf("") }
    var result by remember { mutableStateOf("") }
    var safeMode by remember { mutableStateOf(false) }

    val encode = {
        result =
            try {
                if (safeMode) {
                    java.util.Base64.getUrlEncoder().encodeToString(input.toByteArray())
                } else {
                    java.util.Base64.getEncoder().encodeToString(input.toByteArray())
                }
            } catch (e: Exception) {
                "出错了: ${e.message}"
            }
    }

    val decode = {
        result = try {
            if (safeMode) {
                String(java.util.Base64.getUrlDecoder().decode(input))
            } else {
                String(java.util.Base64.getDecoder().decode(input))
            }
        } catch (e: Exception) {
            "出错了: ${e.message}"
        }
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text(text = "Base64编码/解码") },
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
                Row(
                    modifier = Modifier
                        .padding(8.dp)
                        .fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceAround
                ) {
                    ElevatedFilterChip(
                        selected = !safeMode,
                        onClick = {
                            safeMode = true
                        },
                        label = {
                            Text(text = "URL不安全")
                        }
                    )
                    ElevatedFilterChip(
                        selected = safeMode,
                        onClick = {
                            safeMode = !safeMode
                        },
                        label = {
                            Text(text = "URL安全")
                        }
                    )
                }
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
                        Text(text = "编码")
                    }
                    Button(onClick = {
                        decode()
                    }) {
                        Text(text = "解码")
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

