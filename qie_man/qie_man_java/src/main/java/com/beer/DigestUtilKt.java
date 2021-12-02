package com.beer;

import java.math.BigDecimal;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Locale;

import kotlin.Metadata;
import kotlin.UByte;
import kotlin.jvm.internal.Intrinsics;
import kotlin.random.Random;
import kotlin.text.Charsets;

@Metadata(bv = {1, 0, 3}, d1 = {"\u0000\u0010\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\u001a\u0018\u0010\u0000\u001a\u0004\u0018\u00010\u00012\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0001\u001a\b\u0010\u0005\u001a\u0004\u0018\u00010\u0001\u001a\u0012\u0010\u0006\u001a\u0004\u0018\u00010\u00012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0001\u001a\u0010\u0010\b\u001a\u0004\u0018\u00010\u00012\u0006\u0010\t\u001a\u00020\u0001\u001a\u0010\u0010\n\u001a\u0004\u0018\u00010\u00012\u0006\u0010\t\u001a\u00020\u0001¨\u0006\u000b"}, d2 = {"generateXRequestId", "", "context", "Landroid/content/Context;", "reqUrl", "generateXSign", "getBiometrySecretPassword", "secret", "md5", "str", "sha256", "app_alphaRelease"}, k = 2, mv = {1, 4, 2})
/* compiled from: DigestUtil.kt */
public final class DigestUtilKt {

    public static final String MSG_DB_READY_REPORT = "0";


    public static final String sha256(String str) {
        Intrinsics.checkNotNullParameter(str, "str");
        try {
            MessageDigest instance = MessageDigest.getInstance("SHA-256");
            Intrinsics.checkNotNullExpressionValue(instance, "MessageDigest.getInstance(\"SHA-256\")");
            byte[] bytes = str.getBytes(Charsets.UTF_8);
            Intrinsics.checkNotNullExpressionValue(bytes, "(this as java.lang.String).getBytes(charset)");
            byte[] digest = instance.digest(bytes);
            StringBuilder sb = new StringBuilder();
            for (byte b : digest) {
                int i = b & UByte.MAX_VALUE;
                if (i < 16) {
                    sb.append(MSG_DB_READY_REPORT);
                }
                sb.append(Integer.toHexString(i));
            }
            return sb.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static final String md5(String str) {
        Intrinsics.checkNotNullParameter(str, "str");
        try {
            MessageDigest instance = MessageDigest.getInstance("MD5");
            Intrinsics.checkNotNullExpressionValue(instance, "MessageDigest.getInstance(\"MD5\")");
            byte[] bytes = str.getBytes(Charsets.UTF_8);
            Intrinsics.checkNotNullExpressionValue(bytes, "(this as java.lang.String).getBytes(charset)");
            byte[] digest = instance.digest(bytes);
            StringBuilder sb = new StringBuilder();
            for (byte b : digest) {
                int i = b & UByte.MAX_VALUE;
                if (i < 16) {
                    sb.append(MSG_DB_READY_REPORT);
                }
                sb.append(Integer.toHexString(i));
            }
            return sb.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static final String generateXSign() {
        String str;
        long currentTimeMillis = System.currentTimeMillis();
        BigDecimal valueOf = BigDecimal.valueOf(currentTimeMillis);
        Intrinsics.checkNotNullExpressionValue(valueOf, "BigDecimal.valueOf(this)");
        String sha256 = sha256(String.valueOf(valueOf.multiply(new BigDecimal(String.valueOf(1.01d))).longValue()));
        if (sha256 != null) {
            Locale locale = Locale.getDefault();
            Intrinsics.checkNotNullExpressionValue(locale, "Locale.getDefault()");
            if (sha256 != null) {
                String upperCase = sha256.toUpperCase(locale);
                Intrinsics.checkNotNullExpressionValue(upperCase, "(this as java.lang.String).toUpperCase(locale)");
                if (upperCase != null) {
                    if (upperCase != null) {
                        str = upperCase.substring(0, 32);
                        Intrinsics.checkNotNullExpressionValue(str, "(this as java.lang.Strin…ing(startIndex, endIndex)");
                        return currentTimeMillis + str;
                    }
                    throw new NullPointerException("null cannot be cast to non-null type java.lang.String");
                }
            } else {
                throw new NullPointerException("null cannot be cast to non-null type java.lang.String");
            }
        }
        str = null;
        return currentTimeMillis + str;
    }


    public static final String getBiometrySecretPassword(String str) {
        String str2 = null;
        if (str == null) {
            return null;
        }
        long nextLong = Random.Default.nextLong(100000000, 999999999);
        BigDecimal valueOf = BigDecimal.valueOf(nextLong);
        Intrinsics.checkNotNullExpressionValue(valueOf, "BigDecimal.valueOf(this)");
        String valueOf2 = String.valueOf(valueOf.multiply(new BigDecimal(String.valueOf(1.19d))).longValue());
        String sha256 = sha256(valueOf2 + '#' + str);
        if (sha256 != null) {
            Locale locale = Locale.getDefault();
            Intrinsics.checkNotNullExpressionValue(locale, "Locale.getDefault()");
            if (sha256 != null) {
                String upperCase = sha256.toUpperCase(locale);
                Intrinsics.checkNotNullExpressionValue(upperCase, "(this as java.lang.String).toUpperCase(locale)");
                if (upperCase != null) {
                    if (upperCase != null) {
                        str2 = upperCase.substring(8, 40);
                        Intrinsics.checkNotNullExpressionValue(str2, "(this as java.lang.Strin…ing(startIndex, endIndex)");
                    } else {
                        throw new NullPointerException("null cannot be cast to non-null type java.lang.String");
                    }
                }
            } else {
                throw new NullPointerException("null cannot be cast to non-null type java.lang.String");
            }
        }
        return "_TRADE_." + nextLong + '.' + str2;
    }
}