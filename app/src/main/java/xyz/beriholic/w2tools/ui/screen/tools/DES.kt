package xyz.beriholic.w2tools.ui.screen.tools

import android.annotation.SuppressLint
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
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
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalClipboardManager
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.unit.dp
import com.ramcosta.composedestinations.annotation.Destination
import com.ramcosta.composedestinations.navigation.DestinationsNavigator
import xyz.beriholic.w2tools.ui.component.TextInput
import java.util.UUID
import javax.crypto.Cipher
import javax.crypto.spec.SecretKeySpec

@SuppressLint("GetInstance")
@OptIn(ExperimentalMaterial3Api::class)
@Composable
@Destination
fun DES(
    navigator: DestinationsNavigator
) {
    var input by remember { mutableStateOf("") }
    var result by remember { mutableStateOf("") }
    var key by remember { mutableStateOf("") }

    val encrypt = {
        try {
            val cipher = Cipher.getInstance("DES/ECB/PKCS5Padding")
            val secretKey = SecretKeySpec(key.toByteArray(), "DES")
            cipher.init(Cipher.ENCRYPT_MODE, secretKey)
            val encryptedBytes = cipher.doFinal(input.toByteArray(Charsets.UTF_8))
            result = java.util.Base64.getEncoder().encodeToString(encryptedBytes)
        } catch (e: Exception) {
            result = "加密失败: ${e.message}"
        }
    }
    val decrypt = {
        try {
            val cipher = Cipher.getInstance("DES/ECB/PKCS5Padding")
            val secretKey = SecretKeySpec(key.toByteArray(), "DES")
            cipher.init(Cipher.DECRYPT_MODE, secretKey)
            val decodedBytes = java.util.Base64.getDecoder().decode(input)
            val decryptedBytes = cipher.doFinal(decodedBytes)
            result = String(decryptedBytes, Charsets.UTF_8)
        } catch (e: Exception) {
            result = "解密失败: ${e.message}"
        }
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text("DES加密/解密")
                },
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
                modifier = Modifier.verticalScroll(scrollState)
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(8.dp),
                    horizontalArrangement = Arrangement.SpaceAround,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    TextInput(
                        modifier = Modifier.weight(1f),
                        value = key,
                        onValueChange = { key = it },
                        placeholder = "密钥",
                        maxLine = 1,
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Button(
                        modifier = Modifier.weight(0.4f),
                        onClick = {
                            key = java.util.Base64.getEncoder()
                                .encodeToString(
                                    UUID.randomUUID().toString().replace("-", "").toByteArray()
                                )
                                .substring(0, 8)
                        }) {
                        Text("生成")
                    }
                }

                TextInput(
                    modifier = Modifier.padding(8.dp),
                    value = input,
                    onValueChange = { input = it },
                    size = Pair(400.dp, 250.dp),
                    placeholder = "加密些什么吧"
                )

                Row(
                    modifier = Modifier
                        .padding(8.dp)
                        .fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceAround
                ) {
                    Button(onClick = {
                        encrypt()
                    }) {
                        Text("加密")
                    }
                    Button(onClick = {
                        decrypt()
                    }) {
                        Text("解密")
                    }
                    Button(onClick = {
                        cm.setText(AnnotatedString(result))
                    }) {
                        Text("复制")
                    }
                    Button(onClick = {
                        input = ""
                        result = ""
                        key = ""
                    }) {
                        Text("清空")
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